import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://ai-resume-evaluation-ats-optimization-system-production.up.railway.app'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
  },
})

/**
 * Sends resume PDF and job description to the FastAPI backend for evaluation.
 * @param {File} resumeFile - PDF resume file
 * @param {string} jobDescription - Target job description text
 * @returns {Promise<Object>} Evaluation result from backend
 */
export async function evaluateResume(resumeFile, jobDescription) {
  const formData = new FormData()
  formData.append('resume', resumeFile)
  formData.append('job_description', jobDescription)

  const response = await apiClient.post('/evaluate', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export default apiClient
