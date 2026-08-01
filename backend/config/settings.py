import os

# ============================
# Project Paths
# ============================

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(__file__)
    )
)

MODEL_DIR = os.path.join(
    BASE_DIR,
    "models"
)

DATASET_DIR = os.path.join(
    BASE_DIR,
    "dataset"
)

UPLOAD_DIR = os.path.join(
    BASE_DIR,
    "uploads"
)

# ============================
# Model Files
# ============================

CLASSIFIER_MODEL = os.path.join(
    MODEL_DIR,
    "resume_classifier.pkl"
)

TFIDF_VECTORIZER = os.path.join(
    MODEL_DIR,
    "tfidf_vectorizer.pkl"
)

LABEL_ENCODER = os.path.join(
    MODEL_DIR,
    "label_encoder.pkl"
)

MASTER_SKILLS = os.path.join(
    MODEL_DIR,
    "master_skill_database.pkl"
)

SKILL_ALIAS = os.path.join(
    MODEL_DIR,
    "skill_alias.pkl"
)

# ============================
# Dataset
# ============================

DATASET_FILE = os.path.join(
    DATASET_DIR,
    "resumes_dataset.jsonl"
)