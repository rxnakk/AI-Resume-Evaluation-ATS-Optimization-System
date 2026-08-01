import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi2'

export default function ChatLoadingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="flex gap-3"
    >
      <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-500/20 text-cyan-400">
        <HiSparkles className="w-4 h-4" />
      </div>

      <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <span className="text-slate-500 text-xs">Gemini is thinking...</span>
        </div>
      </div>
    </motion.div>
  )
}
