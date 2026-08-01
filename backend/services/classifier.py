import joblib

from backend.config.settings import (
    CLASSIFIER_MODEL,
    TFIDF_VECTORIZER,
    LABEL_ENCODER
)

from backend.utils.preprocessing import clean_text

# ===============================
# Load Trained Models
# ===============================

model = joblib.load(CLASSIFIER_MODEL)

vectorizer = joblib.load(TFIDF_VECTORIZER)

label_encoder = joblib.load(LABEL_ENCODER)


# ===============================
# Predict Resume Role
# ===============================

def predict_role(resume_text):
    """
    Predicts the most suitable job role
    using the trained ML classifier.
    """

    cleaned = clean_text(resume_text)

    vector = vectorizer.transform([cleaned])

    prediction = model.predict(vector)[0]

    probabilities = model.predict_proba(vector)[0]

    predicted_role = label_encoder.inverse_transform(
        [prediction]
    )[0]

    top_indices = probabilities.argsort()[-3:][::-1]

    top_predictions = []

    for idx in top_indices:

        top_predictions.append({

            "role": label_encoder.classes_[idx],

            "confidence": float(
    round(probabilities[idx] * 100, 2)
            )
        })

    return predicted_role, top_predictions