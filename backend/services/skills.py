import re
import joblib

from backend.config.settings import (
    MASTER_SKILLS,
    SKILL_ALIAS
)

# ===============================
# Load Skill Database
# ===============================

master_skills = joblib.load(MASTER_SKILLS)
skill_alias = joblib.load(SKILL_ALIAS)


# ===============================
# Extract Skills
# ===============================

def extract_skills(text):

    text = text.lower()

    extracted = set()

    for skill in master_skills:

        pattern = r"\b" + re.escape(skill) + r"\b"

        if re.search(pattern, text):
            extracted.add(skill)

    return sorted(extracted)


# ===============================
# Skill Matching
# ===============================

def calculate_skill_match(
    resume_text,
    job_description
):

    resume_skills = extract_skills(
        resume_text
    )

    jd_skills = extract_skills(
        job_description
    )

    matched_skills = sorted(
        set(resume_skills) &
        set(jd_skills)
    )

    missing_skills = sorted(
        set(jd_skills) -
        set(resume_skills)
    )

    if len(jd_skills) > 0:

        skill_score = round(

            len(matched_skills) /

            len(jd_skills) * 100,

            2

        )

    else:

        skill_score = 0

    return {

        "resume_skills": resume_skills,

        "jd_skills": jd_skills,

        "matched_skills": matched_skills,

        "missing_skills": missing_skills,

        "skill_score": skill_score

    }