from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from dotenv import load_dotenv
from pydantic import BaseModel
import os

load_dotenv()

app = FastAPI()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model=genai.GenerativeModel("gemini-pro") 
chat = model.start_chat(history=[])
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Item(BaseModel):
    question: str

def get_gemini_response(question: str):
    response=chat.send_message(question,stream=True)
    return response

@app.post("/gemini")
async def gemini(question: Item):
    response = get_gemini_response(question.question)
    response.resolve()
    for chunk in response:
        print(chunk.text)
    return { "response": "\n".join([chunk.text for chunk in response])}