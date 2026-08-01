import apiClient from './evaluateApi'

/**
 * Sends a career assistant question to the FastAPI /chat endpoint.
 * Context is built automatically from evaluation results and is never shown to the user.
 * @param {string} context - Hidden evaluation context
 * @param {string} question - User's question
 * @returns {Promise<{ answer: string }>}
 */
export async function sendChatMessage(context, question) {
  const response = await apiClient.post('/chat', {
    context,
    question,
  })

  return response.data
}
