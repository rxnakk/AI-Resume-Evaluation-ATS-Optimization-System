import { createContext, useContext, useState, useCallback } from 'react'
import { evaluateResume } from '../api/evaluateApi'

const EvaluationContext = createContext(null)

export function EvaluationProvider({ children }) {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const runEvaluation = useCallback(async (resumeFile, jobDescription) => {
    setLoading(true)
    setError(null)

    try {
      const data = await evaluateResume(resumeFile, jobDescription)
      setResult(data)
      return data
    } catch (err) {
      const message =
        err.response?.data?.detail ||
        err.message ||
        'Failed to evaluate resume. Please try again.'
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const clearResult = useCallback(() => {
    setResult(null)
    setError(null)
  }, [])

  return (
    <EvaluationContext.Provider
      value={{ result, loading, error, runEvaluation, clearResult, setError }}
    >
      {children}
    </EvaluationContext.Provider>
  )
}

export function useEvaluation() {
  const context = useContext(EvaluationContext)
  if (!context) {
    throw new Error('useEvaluation must be used within EvaluationProvider')
  }
  return context
}
