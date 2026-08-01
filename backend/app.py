from backend.services.chat import chat_with_ai
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import shutil
import os

from backend.config.settings import UPLOAD_DIR
from backend.utils.pdf_reader import extract_resume_text
from backend.services.evaluator import evaluate_resume

app = FastAPI(
    title="AI Resume Evaluation & ATS Optimization System"
)

# ==========================
# Enable CORS
# ==========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================
# Create Upload Folder
# ==========================

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)

# ==========================
# Chat Request Model
# ==========================

class ChatRequest(BaseModel):
    context: str
    question: str

# ==========================
# Home Route
# ==========================

@app.get("/")
def home():

    return {
        "message": "AI Resume Evaluation API Running"
    }

# ==========================
# Resume Evaluation
# ==========================

@app.post("/evaluate")
async def evaluate(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):

    file_path = os.path.join(
        UPLOAD_DIR,
        resume.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            resume.file,
            buffer
        )

    resume_text = extract_resume_text(
        file_path
    )

    result = evaluate_resume(
        resume_text,
        job_description
    )

    return result

# ==========================
# AI Career Chat
# ==========================

@app.post("/chat")
def chat(request: ChatRequest):

    answer = chat_with_ai(
        request.context,
        request.question
    )

    return {
        "answer": answer
    }