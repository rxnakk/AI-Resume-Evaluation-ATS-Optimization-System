import { motion } from 'framer-motion'
import {
  HiOutlineCpuChip,
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineScale,
} from 'react-icons/hi2'
import Card from '../components/ui/Card'

const techStack = [
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Sentence Transformers', category: 'ML' },
  { name: 'Scikit-learn', category: 'ML' },
  { name: 'Gemini AI', category: 'AI' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Recharts', category: 'Frontend' },
]

const pipeline = [
  {
    step: '01',
    title: 'Resume Upload',
    description: 'PDF resume is uploaded and text is extracted for analysis.',
    icon: HiOutlineDocumentText,
  },
  {
    step: '02',
    title: 'ML Classification',
    description: 'Machine learning model predicts the most likely professional role.',
    icon: HiOutlineCpuChip,
  },
  {
    step: '03',
    title: 'Semantic & Skill Matching',
    description: 'Sentence transformers compute similarity; skills are matched against the job description.',
    icon: HiOutlineScale,
  },
  {
    step: '04',
    title: 'AI Feedback',
    description: 'Gemini AI generates strengths, weaknesses, suggestions, and hiring recommendations.',
    icon: HiOutlineSparkles,
  },
]

export default function AboutPage() {
  return (
    <div className="hero-gradient min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About the <span className="gradient-text">Project</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            An intelligent resume evaluation system that combines machine learning,
            natural language processing, and generative AI to help candidates optimize
            their resumes for Applicant Tracking Systems (ATS).
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pipeline.map((item, i) => (
            <Card key={item.step} delay={i * 0.1} hover>
              <span className="text-indigo-500 font-mono text-sm">{item.step}</span>
              <div className="p-3 rounded-xl bg-indigo-500/10 inline-flex my-3">
                <item.icon className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Tech Stack */}
        <Card delay={0.2}>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700/50 text-sm"
              >
                <span className="text-white font-medium">{tech.name}</span>
                <span className="text-slate-500 ml-2 text-xs">{tech.category}</span>
              </span>
            ))}
          </div>
        </Card>

        {/* Scoring Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card delay={0.3}>
            <h3 className="text-indigo-400 font-semibold mb-2">ATS Score</h3>
            <p className="text-slate-400 text-sm">
              Weighted combination: 60% skill match + 40% semantic similarity.
              Represents overall resume-job fit for ATS systems.
            </p>
          </Card>
          <Card delay={0.4}>
            <h3 className="text-cyan-400 font-semibold mb-2">Semantic Score</h3>
            <p className="text-slate-400 text-sm">
              Cosine similarity between resume and job description embeddings
              using Sentence Transformers.
            </p>
          </Card>
          <Card delay={0.5}>
            <h3 className="text-violet-400 font-semibold mb-2">Skill Score</h3>
            <p className="text-slate-400 text-sm">
              Percentage of required job skills found in the resume through
              keyword and skill extraction.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
