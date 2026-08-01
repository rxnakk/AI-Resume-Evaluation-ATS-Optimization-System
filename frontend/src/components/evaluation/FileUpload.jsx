import { useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineDocumentArrowUp, HiOutlineDocumentText, HiXMark } from 'react-icons/hi2'

export default function FileUpload({ file, onFileChange, error }) {
  const [isDragging, setIsDragging] = useState(false)

  const validateAndSet = useCallback(
    (selectedFile) => {
      if (!selectedFile) return

      if (selectedFile.type !== 'application/pdf') {
        onFileChange(null, 'Only PDF files are accepted.')
        return
      }

      if (selectedFile.size > 10 * 1024 * 1024) {
        onFileChange(null, 'File size must be under 10 MB.')
        return
      }

      onFileChange(selectedFile, null)
    },
    [onFileChange]
  )

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault()
      setIsDragging(false)
      const droppedFile = e.dataTransfer.files[0]
      validateAndSet(droppedFile)
    },
    [validateAndSet]
  )

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)

  const handleBrowse = (e) => {
    validateAndSet(e.target.files[0])
    e.target.value = ''
  }

  const removeFile = () => onFileChange(null, null)

  return (
    <div className="space-y-2">
      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`
              relative border-2 border-dashed rounded-2xl p-10 text-center
              transition-all duration-300 cursor-pointer
              ${
                isDragging
                  ? 'border-indigo-500 bg-indigo-500/10 scale-[1.01]'
                  : 'border-slate-600 hover:border-indigo-500/50 hover:bg-slate-800/30'
              }
            `}
          >
            <input
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleBrowse}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              aria-label="Upload resume PDF"
            />

            <motion.div
              animate={isDragging ? { y: -5 } : { y: 0 }}
              className="flex flex-col items-center gap-4 pointer-events-none"
            >
              <div className="p-4 rounded-2xl bg-indigo-500/10">
                <HiOutlineDocumentArrowUp className="w-10 h-10 text-indigo-400" />
              </div>
              <div>
                <p className="text-white font-medium text-lg">
                  Drag & drop your resume here
                </p>
                <p className="text-slate-500 text-sm mt-1">or click to browse</p>
              </div>
              <span className="text-xs text-slate-600 px-3 py-1 rounded-full bg-slate-800">
                PDF only · Max 10 MB
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="file-preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
          >
            <div className="p-3 rounded-xl bg-emerald-500/20">
              <HiOutlineDocumentText className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{file.name}</p>
              <p className="text-slate-500 text-sm">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="p-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              aria-label="Remove file"
            >
              <HiXMark className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-400 text-sm"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}
