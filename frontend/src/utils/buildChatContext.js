/**
 * Builds the hidden context payload sent to the /chat endpoint.
 * Derived from the latest resume evaluation result — never shown to the user.
 */
export function buildChatContext(evaluationResult) {
  if (!evaluationResult) return ''

  const {
    predicted_role,
    semantic_score,
    skill_score,
    ats_score,
    resume_skills = [],
    matched_skills = [],
    missing_skills = [],
  } = evaluationResult

  return [
    'Resume Evaluation Summary:',
    '',
    `Predicted Role: ${predicted_role}`,
    `ATS Score: ${ats_score}%`,
    `Semantic Score: ${semantic_score}%`,
    `Skill Score: ${skill_score}%`,
    '',
    `Resume Skills: ${resume_skills.join(', ') || 'None'}`,
    `Matched Skills: ${matched_skills.join(', ') || 'None'}`,
    `Missing Skills: ${missing_skills.join(', ') || 'None'}`,
  ].join('\n')
}
