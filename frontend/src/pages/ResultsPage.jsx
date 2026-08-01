import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiOutlineArrowLeft, HiOutlineArrowPath } from 'react-icons/hi2'
import { useEvaluation } from '../context/EvaluationContext'
import Button from '../components/ui/Button'
import ResultDashboard from '../components/evaluation/ResultDashboard'
import CareerAssistant from '../components/chat/CareerAssistant'

export default function ResultsPage() {
  const navigate = useNavigate()
  const { result, clearResult } = useEvaluation()

  useEffect(() => {
    if (!result) {
      navigate('/evaluate', { replace: true })
    }
  }, [result, navigate])

  if (!result) return null

  const handleNewEvaluation = () => {
    clearResult()
    navigate('/evaluate')
  }

  return (
    <div className="hero-gradient grid-pattern min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <Button variant="secondary" size="sm" onClick={handleNewEvaluation}>
            <HiOutlineArrowPath className="w-4 h-4" />
            New Evaluation
          </Button>
        </motion.div>

        <ResultDashboard data={result} />

        <CareerAssistant evaluationResult={result} />
      </div>
    </div>
  )
}
