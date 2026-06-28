# Spam Email Detector

ML-powered app that classifies email/SMS as spam or ham
using Naive Bayes with 97.8% accuracy.

**Live demo:** https://your-app.vercel.app

**Tech:** Python · Scikit-learn · Flask · React · TF-IDF

## How it works
1. TF-IDF vectorizer converts text to numerical features
2. Multinomial Naive Bayes classifies spam vs ham
3. Flask REST API serves predictions
4. React UI displays result with confidence score
