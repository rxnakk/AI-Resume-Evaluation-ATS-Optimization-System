# AI Resume Evaluation & ATS Optimization System

## Overview

AI Resume Evaluation & ATS Optimization System is a full-stack AI-powered web application that helps job seekers evaluate their resumes against a job description using Machine Learning, Natural Language Processing (NLP), Semantic Similarity, Retrieval-Augmented Generation (RAG), and Google's Gemini API.

The system predicts the most suitable job role, analyzes semantic similarity between the resume and job description, performs skill gap analysis, calculates an ATS score, generates AI-powered resume feedback, and provides a context-aware AI Career Assistant for personalized career guidance.

---

## Live Demo

**Frontend (Vercel):**
```
https://ai-resume-evaluation-ats-optimizati.vercel.app/
```

**Backend API (Railway):**
```
https://ai-resume-evaluation-ats-optimization-system-production.up.railway.app/
```

**API Documentation**
```
https://ai-resume-evaluation-ats-optimization-system-production.up.railway.app/docs
```

---

# Features

- Resume upload in PDF format
- Automatic PDF text extraction
- Resume role prediction using Machine Learning
- Semantic similarity analysis
- Skill extraction and normalization
- Skill gap analysis
- ATS score calculation
- AI-generated resume feedback
- Retrieval-Augmented Generation (RAG) based AI Career Assistant
- Context-aware resume improvement suggestions
- Hiring recommendation
- Responsive modern user interface
- Cloud deployment using Railway and Vercel

---

# Technologies Used

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Framer Motion

## Backend

- FastAPI
- Python

## Machine Learning & Artificial Intelligence

- Scikit-learn
- TF-IDF Vectorizer
- Sentence Transformers
- Google Gemini API
- Retrieval-Augmented Generation (RAG)
- Prompt Engineering

## Data Processing

- Pandas
- NumPy
- Joblib
- PyMuPDF (Fitz)

## Deployment

- Railway
- Vercel
- GitHub

---

# System Workflow

```text
Resume Upload
      │
      ▼
PDF Text Extraction
      │
      ▼
Resume Classification
      │
      ▼
Semantic Similarity Analysis
      │
      ▼
Skill Extraction & Normalization
      │
      ▼
Skill Matching
      │
      ▼
ATS Score Calculation
      │
      ▼
AI Resume Feedback
      │
      ▼
RAG-based AI Career Assistant
```

---

# Project Structure

```text
AI Resume Evaluator/
│
├── backend/
│   ├── app.py
│   ├── config/
│   ├── services/
│   ├── utils/
│   └── uploads/
│
├── frontend/
│
├── models/
│
├── dataset/
│
├── notebook/
│
├── requirements.txt
├── .env.example
├── .gitignore
├── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/rxnakk/AI-Resume-Evaluation-ATS-Optimization-System.git
```

```bash
cd AI-Resume-Evaluation-ATS-Optimization-System
```

---

## Backend Setup

Create a virtual environment

```bash
python -m venv venv
```

Activate the virtual environment

**Windows**

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Create a `.env` file

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run FastAPI

```bash
python -m uvicorn backend.app:app --reload
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# AI Career Assistant

The AI Career Assistant uses Retrieval-Augmented Generation (RAG) by combining the latest resume evaluation results with Google Gemini to generate personalized responses.

Example questions:

- How can I improve my ATS score?
- Which skills are missing from my resume?
- Recommend projects for my target role.
- Suggest certifications.
- Generate interview questions.
- Explain my ATS evaluation.
- Improve my resume summary.

The assistant automatically builds context from the latest evaluation, enabling personalized career guidance without requiring users to manually provide evaluation details.

---

# Screenshots

Add screenshots of:

- Home Page
- Resume Upload
- Resume Evaluation Dashboard
- ATS Score
- Semantic Similarity Analysis
- Skill Gap Analysis
- AI Resume Feedback
- AI Career Assistant

---

# Future Enhancements

- User authentication
- Resume history
- Resume builder
- Company-specific ATS templates
- PDF report generation
- Resume comparison
- Multiple Job Description comparison
- Multi-language support
- Database integration
- Interview preparation module

---

# Learning Outcomes

This project demonstrates practical implementation of:

- Machine Learning
- Natural Language Processing (NLP)
- Resume Classification
- Semantic Similarity
- Skill Extraction & Normalization
- Retrieval-Augmented Generation (RAG)
- Prompt Engineering
- Google Gemini API Integration
- REST API Development
- FastAPI
- React.js
- Full Stack Development
- Cloud Deployment

---

# Developer

**Ronak Kapadia**

Master of Computer Applications (MCA)

This project was developed as an academic learning project to demonstrate the practical integration of Machine Learning, Natural Language Processing, Retrieval-Augmented Generation (RAG), and Generative AI for intelligent resume evaluation and career assistance.

---

# Acknowledgements

This project utilizes the following open-source resources:

- Kaggle Resume Dataset (used for training the resume classification model)
- Google Gemini API
- Sentence Transformers
- Scikit-learn
- FastAPI
- React.js
- Tailwind CSS
- Vite

Dataset Source:

https://www.kaggle.com/datasets/rayyankauchali0/resume-dataset

---

# License

This project is intended for educational and learning purposes.