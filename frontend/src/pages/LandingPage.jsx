import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiOutlineSparkles,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineCpuChip,
  HiOutlineChartBarSquare,
} from 'react-icons/hi2'
import Button from '../components/ui/Button'

const features = [
  {
    icon: HiOutlineDocumentMagnifyingGlass,
    title: 'Resume Analysis',
    description: 'Upload your PDF resume and get instant AI-powered evaluation against any job description.',
  },
  {
    icon: HiOutlineCpuChip,
    title: 'ML Classification',
    description: 'Predict your professional role using trained machine learning models on resume data.',
  },
  {
    icon: HiOutlineChartBarSquare,
    title: 'ATS Optimization',
    description: 'Receive semantic similarity scores, skill matching, and actionable ATS improvement tips.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function LandingPage() {
  return (
    <div className="hero-gradient grid-pattern min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-8">
              <HiOutlineSparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-medium">
                Powered by Machine Learning & Gemini AI
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            >
              AI Resume Evaluation &{' '}
              <span className="gradient-text">ATS Optimization</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Analyze your resume against job descriptions with semantic matching,
              skill gap analysis, and intelligent feedback — built for modern hiring.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/evaluate">
                <Button size="lg">
                  <HiOutlineSparkles className="w-5 h-5" />
                  Start Evaluation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Floating orbs */}
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl"
              animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-8 text-center group"
            >
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
