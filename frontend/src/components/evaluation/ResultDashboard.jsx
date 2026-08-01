import { motion } from 'framer-motion'
import {
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2'
import Card from '../ui/Card'
import SkillChip from '../ui/SkillChip'
import ScoreRadialChart from '../charts/ScoreRadialChart'
import ScoreCharts from '../charts/ScoreCharts'

function MetricCard({ icon: Icon, title, value, subtitle, color, delay }) {
  return (
    <Card delay={delay} hover className="text-center">
      <div
        className={`inline-flex p-3 rounded-xl mb-3 ${color}`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
      {subtitle && <p className="text-slate-500 text-xs mt-1">{subtitle}</p>}
    </Card>
  )
}

function FeedbackList({ title, items, icon: Icon, colorClass }) {
  if (!items?.length) return null

  return (
    <div>
      <h4 className={`flex items-center gap-2 font-semibold mb-3 ${colorClass}`}>
        <Icon className="w-5 h-5" />
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-2 text-slate-300 text-sm"
          >
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colorClass.replace('text-', 'bg-')}`} />
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

function HiringBadge({ status, reason }) {
  const statusLower = (status || '').toLowerCase()

  let badgeClass = ''

  switch (statusLower) {
    case 'excellent fit':
      badgeClass =
        'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
      break

    case 'good fit':
      badgeClass =
        'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
      break

    case 'moderate fit':
      badgeClass =
        'bg-amber-500/15 text-amber-400 border-amber-500/30'
      break

    default:
      badgeClass =
        'bg-red-500/15 text-red-400 border-red-500/30'
  }

  return (
    <div className={`rounded-xl p-5 border ${badgeClass}`}>
      <p className="font-bold text-lg">{status || 'N/A'}</p>

      {reason && (
        <p className="text-sm mt-2 opacity-90">
          {reason}
        </p>
      )}
    </div>
  )
}

export default function ResultDashboard({ data }) {
  const {
    predicted_role,
    top_predictions,
    semantic_score,
    skill_score,
    ats_score,
    resume_skills,
    matched_skills,
    missing_skills,
    ai_feedback,
  } = data

  return (
    <div className="space-y-8">
      {/* Hero ATS Score */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8"
      >
        <ScoreRadialChart score={ats_score} label="ATS Score" type="ats" size="large" />
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">
            Evaluation Complete
          </h2>
          <p className="text-slate-400 mb-4">
            Your resume has been analyzed against the job description using ML models and Gemini AI.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
            <HiOutlineBriefcase className="w-5 h-5 text-indigo-400" />
            <span className="text-indigo-300 font-medium">
              Predicted Role: <span className="text-white">{predicted_role}</span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Score Charts Row */}
      <ScoreCharts
        atsScore={ats_score}
        semanticScore={semantic_score}
        skillScore={skill_score}
      />

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          icon={HiOutlineBriefcase}
          title="Predicted Role"
          value={predicted_role}
          subtitle="ML Classification"
          color="bg-indigo-500/20 text-indigo-400"
          delay={0.1}
        />
        <MetricCard
          icon={HiOutlineChartBar}
          title="Semantic Similarity"
          value={`${Math.round(semantic_score)}%`}
          subtitle="Sentence Transformers"
          color="bg-cyan-500/20 text-cyan-400"
          delay={0.2}
        />
        <MetricCard
          icon={HiOutlineArrowTrendingUp}
          title="Skill Match"
          value={`${Math.round(skill_score)}%`}
          subtitle="Keyword & Skill Analysis"
          color="bg-violet-500/20 text-violet-400"
          delay={0.3}
        />
      </div>

      {/* Top Predictions */}
      {top_predictions?.length > 0 && (
        <Card delay={0.2}>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <HiOutlineSparkles className="text-indigo-400" />
            Top Role Predictions
          </h3>
          <div className="space-y-3">
            {top_predictions.map((pred, i) => (
              <div key={pred.role} className="flex items-center gap-4">
                <span className="text-slate-500 text-sm w-6">#{i + 1}</span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-white font-medium">{pred.role}</span>
                    <span className="text-indigo-400 text-sm font-medium">
                     {Number(pred.confidence).toFixed(2)}% 
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pred.confidence}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Skills Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card delay={0.1}>
          <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
            <HiOutlineCheckCircle />
            Matched Skills ({matched_skills?.length || 0})
          </h3>
          <div className="flex flex-wrap gap-2">
            {matched_skills?.length ? (
              matched_skills.map((skill, i) => (
                <SkillChip key={skill} label={skill} variant="matched" index={i} />
              ))
            ) : (
              <p className="text-slate-500 text-sm">No matched skills found.</p>
            )}
          </div>
        </Card>

        <Card delay={0.2}>
          <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
            <HiOutlineXCircle />
            Missing Skills ({missing_skills?.length || 0})
          </h3>
          <div className="flex flex-wrap gap-2">
            {missing_skills?.length ? (
              missing_skills.map((skill, i) => (
                <SkillChip key={skill} label={skill} variant="missing" index={i} />
              ))
            ) : (
              <p className="text-slate-500 text-sm">No missing skills identified.</p>
            )}
          </div>
        </Card>

        <Card delay={0.3}>
          <h3 className="text-lg font-semibold text-slate-300 mb-4">
            Resume Skills ({resume_skills?.length || 0})
          </h3>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {resume_skills?.length ? (
              resume_skills.map((skill, i) => (
                <SkillChip key={skill} label={skill} variant="neutral" index={i} />
              ))
            ) : (
              <p className="text-slate-500 text-sm">No skills extracted.</p>
            )}
          </div>
        </Card>
      </div>

      {/* AI Feedback */}
      {ai_feedback && (
        <Card delay={0.2} className="border border-indigo-500/20">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <HiOutlineLightBulb className="text-amber-400 w-6 h-6" />
            AI Feedback
            <span className="text-xs font-normal text-slate-500 ml-2">Powered by Gemini</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeedbackList
              title="Strengths"
              items={ai_feedback.strengths}
              icon={HiOutlineCheckCircle}
              colorClass="text-emerald-400"
            />
            <FeedbackList
              title="Weaknesses"
              items={ai_feedback.weaknesses}
              icon={HiOutlineXCircle}
              colorClass="text-red-400"
            />
          </div>

          {ai_feedback.skill_gap_analysis && (
            <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <h4 className="font-semibold text-cyan-400 mb-2">Skill Gap Analysis</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {ai_feedback.skill_gap_analysis}
              </p>
            </div>
          )}

          {ai_feedback.suggestions?.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold text-indigo-400 mb-3">Suggestions</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {ai_feedback.suggestions.map((suggestion, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-slate-300 text-sm p-3 rounded-lg bg-slate-800/40"
                  >
                    <span className="text-indigo-400 font-bold shrink-0">{i + 1}.</span>
                    {suggestion}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {ai_feedback.hiring_recommendation && (
            <div className="mt-8">
              <h4 className="font-semibold text-white mb-3">Hiring Recommendation</h4>
              <HiringBadge
                status={ai_feedback.hiring_recommendation.status}
                reason={ai_feedback.hiring_recommendation.reason}
              />
            </div>
          )}
        </Card>
      )}
    </div>
  )
}
