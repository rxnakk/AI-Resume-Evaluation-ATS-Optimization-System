from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# =====================================
# Load Sentence-BERT Model (Only Once)
# =====================================

semantic_model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)


# =====================================
# Semantic Similarity
# =====================================

def calculate_semantic_similarity(
    resume_text,
    job_description
):
    """
    Calculates semantic similarity
    between resume and job description.
    """

    resume_embedding = semantic_model.encode(
        resume_text,
        convert_to_tensor=False
    )

    jd_embedding = semantic_model.encode(
        job_description,
        convert_to_tensor=False
    )

    similarity = cosine_similarity(
        [resume_embedding],
        [jd_embedding]
    )[0][0]

    similarity_percentage = float(
    round(float(similarity) * 100, 2)
)

    return similarity_percentage