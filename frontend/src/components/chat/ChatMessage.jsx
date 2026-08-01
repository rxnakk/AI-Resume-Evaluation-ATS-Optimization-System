import { motion } from 'framer-motion'
import { HiSparkles, HiUser } from 'react-icons/hi2'

function formatTimestamp(date) {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default function ChatMessage({ role, content, timestamp }) {
  const isUser = role === 'user'

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <div
        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
          isUser
            ? 'bg-indigo-600/30 text-indigo-400'
            : 'bg-cyan-500/20 text-cyan-400'
        }`}
      >
        {isUser ? (
          <HiUser className="w-4 h-4" />
        ) : (
          <HiSparkles className="w-4 h-4" />
        )}
      </div>

      <div
        className={`flex flex-col max-w-[80%] sm:max-w-[75%] ${
          isUser ? 'items-end' : 'items-start'
        }`}
      >
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isUser
              ? 'bg-indigo-600/25 border border-indigo-500/30 text-slate-100 rounded-tr-sm'
              : 'glass-card text-slate-200 rounded-tl-sm'
          }`}
        >
          <p className="whitespace-pre-wrap break-words">{content}</p>
        </div>
        <span className="text-slate-600 text-xs mt-1.5 px-1">
          {formatTimestamp(timestamp)}
        </span>
      </div>
    </motion.div>
  )
}
