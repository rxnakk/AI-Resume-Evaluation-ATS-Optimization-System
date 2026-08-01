import { useEffect, useState } from 'react'
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'
import { motion } from 'framer-motion'

const colorMap = {
  ats: { fill: '#6366f1', glow: 'rgba(99, 102, 241, 0.4)' },
  semantic: { fill: '#22d3ee', glow: 'rgba(34, 211, 238, 0.4)' },
  skill: { fill: '#a78bfa', glow: 'rgba(167, 139, 250, 0.4)' },
}

function getScoreColor(score) {
  if (score >= 75) return '#10b981'
  if (score >= 50) return '#f59e0b'
  return '#ef4444'
}

export default function ScoreRadialChart({
  score,
  label,
  type = 'ats',
  size = 'large',
}) {
  const [animatedScore, setAnimatedScore] = useState(0)
  const numericScore = Math.round(Number(score) || 0)
  const colors = colorMap[type] || colorMap.ats
  const dynamicColor = getScoreColor(numericScore)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(numericScore), 100)
    return () => clearTimeout(timer)
  }, [numericScore])

  const data = [{ name: label, value: animatedScore, fill: dynamicColor }]
  const dimensions = size === 'large' ? { width: 220, height: 220, inner: 70, outer: 95 } : { width: 160, height: 160, inner: 50, outer: 70 }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div
        className="relative"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          filter: `drop-shadow(0 0 20px ${colors.glow})`,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={dimensions.inner}
            outerRadius={dimensions.outer}
            barSize={12}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar
              background={{ fill: '#1e293b' }}
              dataKey="value"
              cornerRadius={10}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={animatedScore}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`font-bold ${size === 'large' ? 'text-4xl' : 'text-2xl'}`}
            style={{ color: dynamicColor }}
          >
            {animatedScore}%
          </motion.span>
          <span className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  )
}
