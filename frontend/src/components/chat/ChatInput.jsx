import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'

export default function ChatInput({ onSend, disabled = false }) {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmed = message.trim()
    if (!trimmed || disabled) return

    onSend(trimmed)
    setMessage('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-end">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={1}
        placeholder="Ask about your resume, skills, interview prep..."
        className="
          flex-1 px-4 py-3 rounded-xl resize-none
          bg-slate-800/60 border border-slate-600/50
          text-slate-200 placeholder-slate-500 text-sm
          focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50
          disabled:opacity-50 disabled:cursor-not-allowed
          max-h-32 min-h-[48px]
        "
        style={{ fieldSizing: 'content' }}
      />

      <motion.button
        type="submit"
        disabled={disabled || !message.trim()}
        whileHover={disabled ? {} : { scale: 1.05 }}
        whileTap={disabled ? {} : { scale: 0.95 }}
        className="
          shrink-0 p-3 rounded-xl
          bg-gradient-to-r from-indigo-600 to-cyan-500
          text-white shadow-lg shadow-indigo-500/25
          disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
          transition-opacity
        "
        aria-label="Send message"
      >
        <HiPaperAirplane className="w-5 h-5" />
      </motion.button>
    </form>
  )
}
