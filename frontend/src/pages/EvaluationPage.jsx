import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineSparkles } from 'react-icons/hi2'
import { useEvaluation } from '../context/EvaluationContext'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import FileUpload from '../components/evaluation/FileUpload'
import JobDescriptionInput from '../components/evaluation/JobDescriptionInput'

export default function EvaluationPage() {
  const navigate = useNavigate()
  const { loading, error, runEvaluation, setError } = useEvaluation()

  const [resumeFile, setResumeFile] = useState(null)
  const [fileError, setFileError] = useState(null)
  const [jobDescription, setJobDescription] = useState('')
  const [jdError, setJdError] = useState(null)

  const handleFileChange = (file, err) => {
    setResumeFile(file)
    setFileError(err)
  }

  const handleEvaluate = async () => {
    setJdError(null)
    setError(null)

    if (!resumeFile) {
      setFileError('Please upload a PDF resume.')
      return
    }

    if (!jobDescription.trim()) {
      setJdError('Please enter a job description.')
      return
    }

    if (jobDescription.trim().length < 50) {
      setJdError('Job description should be at least 50 characters for accurate analysis.')
      return
    }

    try {
      await runEvaluation(resumeFile, jobDescription.trim())
      navigate('/results')
    } catch {
      // Error is handled in context
    }
  }

  return (
    <div className="hero-gradient grid-pattern min-h-[calc(100vh-4rem)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Resume <span className="gradient-text">Evaluation</span>
          </h1>
          <p className="text-slate-400">
            Upload your resume and paste the job description to get AI-powered analysis.
          </p>
        </motion.div>

        {loading ? (
          <Card>
            <LoadingSpinner />
          </Card>
        ) : (
          <Card delay={0.1}>
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">
                  1. Upload Resume
                </h2>
                <FileUpload
                  file={resumeFile}
                  onFileChange={handleFileChange}
                  error={fileError}
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-4">
                  2. Job Description
                </h2>
                <JobDescriptionInput
                  value={jobDescription}
                  onChange={setJobDescription}
                  error={jdError}
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  {typeof error === 'string' ? error : 'An error occurred during evaluation.'}
                </motion.div>
              )}

              <Button
                size="lg"
                className="w-full"
                onClick={handleEvaluate}
                disabled={loading}
              >
                <HiOutlineSparkles className="w-5 h-5" />
                Evaluate Resume
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
