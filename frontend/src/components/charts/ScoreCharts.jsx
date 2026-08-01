import { motion } from 'framer-motion'
import ScoreRadialChart from './ScoreRadialChart'

export default function ScoreCharts({ atsScore, semanticScore, skillScore }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card rounded-2xl p-6 flex flex-col items-center"
      >
        <ScoreRadialChart score={atsScore} label="ATS Score" type="ats" size="small" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-2xl p-6 flex flex-col items-center"
      >
        <ScoreRadialChart
          score={semanticScore}
          label="Semantic"
          type="semantic"
          size="small"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card rounded-2xl p-6 flex flex-col items-center"
      >
        <ScoreRadialChart score={skillScore} label="Skill Match" type="skill" size="small" />
      </motion.div>
    </div>
  )
}
