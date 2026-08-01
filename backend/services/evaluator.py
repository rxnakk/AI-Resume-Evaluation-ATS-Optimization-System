from backend.services.classifier import predict_role
from backend.services.semantic import calculate_semantic_similarity
from backend.services.skills import calculate_skill_match
from backend.services.gemini import generate_ai_feedback


def calculate_ats_score(skill_score, semantic_score):
    """
    Calculates ATS score using
    weighted average.
    """

    ats_score = round(
        (0.60 * float(skill_score)) +
        (0.40 * float(semantic_score)),
        2
    )

    return float(ats_score)


def get_hiring_status(ats_score):
    """
    Returns hiring recommendation
    based on ATS score.
    """

    if ats_score >= 85:
        return "Excellent Fit"

    elif ats_score >= 70:
        return "Good Fit"

    elif ats_score >= 50:
        return "Moderate Fit"

    else:
        return "Needs Improvement"


def evaluate_resume(
    resume_text,
    job_description
):
    """
    Complete Resume Evaluation Pipeline
    """

    # ============================
    # Resume Classification
    # ============================

    predicted_role, top_predictions = predict_role(
        resume_text
    )

    # ============================
    # Semantic Matching
    # ============================

    semantic_score = calculate_semantic_similarity(
        resume_text,
        job_description
    )

    # ============================
    # Skill Matching
    # ============================

    skill_result = calculate_skill_match(
        resume_text,
        job_description
    )

    skill_score = skill_result["skill_score"]

    # ============================
    # ATS Score
    # ============================

    ats_score = calculate_ats_score(
        skill_score,
        semantic_score
    )

    # ============================
    # Hiring Recommendation
    # ============================

    hiring_status = get_hiring_status(
        ats_score
    )

    # ============================
    # Convert everything to Python types
    # ============================

    predicted_role = str(predicted_role)

    semantic_score = float(semantic_score)
    skill_score = float(skill_score)
    ats_score = float(ats_score)

    resume_skills = [
        str(x)
        for x in skill_result["resume_skills"]
    ]

    matched_skills = [
        str(x)
        for x in skill_result["matched_skills"]
    ]

    missing_skills = [
        str(x)
        for x in skill_result["missing_skills"]
    ]

    # ============================
    # Clean Prediction Values
    # ============================

    clean_predictions = []

    for item in top_predictions:

        clean_predictions.append({

            "role": str(item["role"]),

            "confidence": float(item["confidence"])

        })

    # ============================
    # Gemini Context
    # ============================

    context = f"""
Predicted Role:
{predicted_role}

ATS Score:
{ats_score}

Hiring Recommendation:
{hiring_status}

Semantic Score:
{semantic_score}

Skill Score:
{skill_score}

Resume Skills:
{', '.join(resume_skills)}

Matched Skills:
{', '.join(matched_skills)}

Missing Skills:
{', '.join(missing_skills)}
"""

    # ============================
    # AI Feedback
    # ============================

    ai_feedback = generate_ai_feedback(
        context
    )

    # ============================
    # Force Hiring Status
    # ============================

    if ai_feedback:

        if "hiring_recommendation" not in ai_feedback:

            ai_feedback["hiring_recommendation"] = {}

        ai_feedback["hiring_recommendation"]["status"] = hiring_status

    # ============================
    # Final Response
    # ============================

    return {

        "predicted_role": predicted_role,

        "top_predictions": clean_predictions,

        "semantic_score": semantic_score,

        "skill_score": skill_score,

        "ats_score": ats_score,

        "resume_skills": resume_skills,

        "matched_skills": matched_skills,

        "missing_skills": missing_skills,

        "ai_feedback": ai_feedback

    }