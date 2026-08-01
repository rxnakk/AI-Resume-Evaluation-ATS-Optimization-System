import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi2'

export default function LoadingSpinner({ message = 'Analyzing your resume with AI...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6">
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-slate-700 border-t-indigo-500 border-r-cyan-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiSparkles className="w-8 h-8 text-indigo-400" />
        </motion.div>
      </div>

      <motion.p
        className="text-slate-400 text-lg text-center max-w-md"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {message}
      </motion.p>

      <div className="flex gap-2">
        {['Extracting text', 'Matching skills', 'Generating AI feedback'].map(
          (step, i) => (
            <motion.span
              key={step}
              className="text-xs text-slate-500 px-3 py-1 rounded-full bg-slate-800/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.8 }}
            >
              {step}
            </motion.span>
          )
        )}
      </div>
    </div>
  )
}
