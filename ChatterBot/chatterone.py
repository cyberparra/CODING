from transformers import pipeline
classifier=pipeline("sentiment_analysis")
res=classifier("LMM are very interesting tools")
print(res)
