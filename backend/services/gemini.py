import json
import os

import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

gemini_model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def generate_ai_feedback(context_text):
    """
    Generates AI-powered
    resume feedback
    using Gemini.
    """

    prompt = f"""
You are an expert ATS recruiter.

Analyze ONLY the information provided below.

{context_text}

Return ONLY a valid JSON.

Use this format:

{{
    "strengths":[
        "...",
        "...",
        "..."
    ],

    "weaknesses":[
        "...",
        "...",
        "..."
    ],

    "skill_gap_analysis":"...",

    "suggestions":[
        "...",
        "...",
        "..."
    ],

    "hiring_recommendation":{{
        "status":"Use the Hiring Recommendation provided in the context exactly as it is.",
        "reason":"Explain in 2-3 lines why the candidate received this hiring recommendation based on ATS score, semantic similarity, and skill matching."
    }}
}}

Rules:

- Return ONLY JSON.
- No Markdown.
- No code block.
- No explanation.
- Do not invent skills.
- Use the Hiring Recommendation exactly as provided in the context.
- Do NOT change the hiring status.
- Only generate the reason.
"""

    response = gemini_model.generate_content(prompt)

    try:

        cleaned = response.text.strip()

        cleaned = cleaned.replace("```json", "")
        cleaned = cleaned.replace("```", "")
        cleaned = cleaned.strip()

        return json.loads(cleaned)

    except Exception as e:

        print("JSON Parsing Error:", e)
        print(response.text)

        return None