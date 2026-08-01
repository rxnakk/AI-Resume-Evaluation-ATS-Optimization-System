import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2'
import { AnimatePresence } from 'framer-motion'
import Card from '../ui/Card'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import ChatLoadingIndicator from './ChatLoadingIndicator'
import { sendChatMessage } from '../../api/chatApi'
import { buildChatContext } from '../../utils/buildChatContext'

export default function CareerAssistant({ evaluationResult }) {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const chatEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading, scrollToBottom])

  const handleSend = async (question) => {
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: question,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setLoading(true)
    setError(null)

    try {
      const context = buildChatContext(evaluationResult)
      const { answer } = await sendChatMessage(context, question)

      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: answer,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (err) {
      const errorText =
        err.response?.data?.detail ||
        err.message ||
        'Failed to get a response. Please try again.'
      setError(errorText)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-10"
    >
      <Card className="border border-indigo-500/20">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-600/30 to-cyan-500/30">
              <HiOutlineChatBubbleLeftRight className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">AI Career Assistant</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
            Ask questions about your resume, ATS score, missing skills, interview
            preparation, career guidance, and resume improvements.
          </p>
        </div>

        {/* Chat History */}
        <div
          ref={chatContainerRef}
          className="mb-4 rounded-xl bg-slate-900/50 border border-slate-700/50 p-4 space-y-4 min-h-[280px] max-h-[480px] overflow-y-auto"
        >
          {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <HiOutlineChatBubbleLeftRight className="w-10 h-10 text-slate-600 mb-3" />
              <p className="text-slate-500 text-sm">
                No messages yet. Ask your first question below!
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              role={msg.role}
              content={msg.content}
              timestamp={msg.timestamp}
            />
          ))}

          <AnimatePresence>
            {loading && <ChatLoadingIndicator />}
          </AnimatePresence>

          <div ref={chatEndRef} />
        </div>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-sm mb-3 px-1"
          >
            {error}
          </motion.p>
        )}

        {/* Input */}
        <ChatInput onSend={handleSend} disabled={loading} />
      </Card>
    </motion.section>
  )
}
