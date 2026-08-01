import { FaGithub } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500">
              <HiSparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">
                AI Resume Evaluation & ATS Optimization System
              </p>
              <p className="text-slate-500 text-xs mt-0.5">
                Final Year Project — Developer: [Your Name]
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <FaGithub className="w-5 h-5" />
              GitHub Repository
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} AI Resume Evaluator. Built with React, FastAPI & Gemini AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
