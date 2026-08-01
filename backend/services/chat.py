from backend.services.gemini import gemini_model


def chat_with_ai(context, question):
    """
    AI Career Assistant
    """

    prompt = f"""
You are an expert Career Coach and ATS Resume Consultant.

Current Resume Evaluation:

{context}

User Question:

{question}

Instructions:

- Answer only based on the resume evaluation.
- Give practical career advice.
- Keep the answer concise.
- Use bullet points when appropriate.
- If the question is unrelated to resumes or careers, politely redirect the conversation.
"""

    response = gemini_model.generate_content(prompt)

    return response.text