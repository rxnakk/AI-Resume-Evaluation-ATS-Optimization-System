import { motion } from 'framer-motion'

const variants = {
  matched: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  missing: 'bg-red-500/15 text-red-400 border-red-500/30',
  neutral: 'bg-slate-700/50 text-slate-300 border-slate-600/50',
}

export default function SkillChip({ label, variant = 'neutral', index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.03, duration: 0.2 }}
      className={`
        inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium
        border ${variants[variant]}
      `}
    >
      {label}
    </motion.span>
  )
}
