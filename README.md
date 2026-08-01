# AI Resume Evaluation & ATS Optimization System

## Overview

AI Resume Evaluation & ATS Optimization System is a full-stack web application that helps job seekers evaluate their resumes against a job description using Artificial Intelligence, Machine Learning, Natural Language Processing, Semantic Similarity, Retrieval-Augmented Generation (RAG), and Google's Gemini API.

The application predicts the most suitable job role, analyzes semantic similarity, performs skill matching, calculates an ATS score, identifies missing skills, generates AI-powered feedback, and provides an AI Career Assistant that answers resume-related queries based on the candidate's evaluation.

---

# Features

- Resume upload in PDF format
- Resume text extraction
- Resume role prediction using Machine Learning
- Semantic similarity analysis between resume and job description
- Skill extraction and skill gap analysis
- Skill alias normalization
- ATS score calculation
- AI-generated resume feedback using Gemini
- Retrieval-Augmented Generation (RAG) based AI Career Assistant
- Context-aware career guidance and resume improvement suggestions
- Hiring recommendation
- Modern responsive user interface

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
Skill Extraction
      │
      ▼
Skill Matching
      │
      ▼
ATS Score Calculation
      │
      ▼
AI Feedback Generation
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
└── README.md
```

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/rxnakk/AI-Resume-Evaluation-ATS-Optimization-System.git
```

Move to the project directory.

```bash
cd AI-Resume-Evaluation-ATS-Optimization-System
```

---

## Backend Setup

Create a virtual environment.

```bash
python -m venv venv
```

Activate the environment.

Windows

```bash
venv\Scripts\activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

Create a `.env` file.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run the backend.

```bash
python -m uvicorn backend.app:app --reload
```

API Documentation

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

Frontend URL

```
http://localhost:5173
```

---

# AI Career Assistant

The AI Career Assistant uses Retrieval-Augmented Generation (RAG) by combining the evaluated resume context with Google Gemini to generate personalized responses.

Users can ask questions such as:

- How can I improve my ATS score?
- Which skills are missing from my resume?
- What projects should I build?
- Recommend certifications for my target role.
- Generate interview questions.
- Explain my ATS evaluation.
- Suggest improvements for my resume summary.

The chatbot automatically uses the latest evaluation results to provide context-aware recommendations.

---

# Screenshots

Include screenshots of:

- Home Page
- Resume Upload
- Resume Evaluation Dashboard
- ATS Score Analysis
- Skill Analysis
- AI Feedback
- AI Career Assistant

---

# Future Scope

- User authentication and profile management
- Resume history and previous evaluations
- Company-specific ATS templates
- Cloud deployment
- Resume builder
- PDF report generation
- Multi-language resume evaluation
- Database integration
- Interview preparation module

---

# Learning Outcomes

This project demonstrates practical implementation of:

- Machine Learning
- Natural Language Processing
- Resume Classification
- Semantic Search
- Skill Extraction and Normalization
- Retrieval-Augmented Generation (RAG)
- Prompt Engineering
- Google Gemini API Integration
- REST API Development
- FastAPI
- React.js
- Full Stack Development

---

# Developer

**Ronak Kapadia**

Master of Computer Applications (MCA)

This project was developed as part of academic learning to demonstrate the integration of Machine Learning, Natural Language Processing, Retrieval-Augmented Generation (RAG), and Generative AI in an intelligent resume evaluation system.

---
# Acknowledgements

This project was developed using the following open-source resources:

- Kaggle – Public Resume Dataset used for training the resume classification model.
- Google Gemini API – AI-powered resume feedback and career assistant.
- Sentence Transformers – Semantic similarity analysis.
- Scikit-learn – Machine learning model development.
- FastAPI – Backend REST API.
- React.js – Frontend development.

Dataset Source:

https://www.kaggle.com/datasets/rayyankauchali0/resume-dataset
# License

This project is intended for educational and learning purposes.