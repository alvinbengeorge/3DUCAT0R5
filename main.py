from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from dotenv import load_dotenv
from pydantic import BaseModel
import os
import requests

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

students = [{
    "username": "alvin",
    "password": "alvin",
    "recently_viewed": []
}]

class Item(BaseModel):
    question: str

class Student(BaseModel):
    username: str
    password: str

class Location(BaseModel):
    screen: str
    username: str

def get_gemini_response(question: str):
    response=chat.send_message(question,stream=True)
    return response

@app.post("/gemini")
async def gemini(question: Item):
    response = get_gemini_response(question.question)
    response.resolve()
    return { "response": "\n".join([chunk.text for chunk in response])}

@app.post("/wolfram")
async def wolfram(question: Item):
    response = requests.get(f"https://api.wolframalpha.com/v1/spoken?i={question.question}&appid={os.getenv('WOLFRAM')}")
    return { "response": response.content.decode() }

@app.post("/create-student")
async def create_student(student: Student):
    student = dict(student)
    student.update({ "recently_viewed": []})
    students.append(student)
    return { "response": "Student created", "student": student }

@app.post("/visited")
async def visited(location: Location):
    for student in students:
        if student["username"] == location.username:
            student["recently_viewed"].append(location.screen)
            return { "response": "Visited updated", "student": student }
    return { "response": "Student not found" }

@app.get("/students")
async def get_students():
    return { "students": students }

@app.get("/student/{username}")
async def get_student(username: str):
    for student in students:
        if student["username"] == username:
            return { "student": student }
    return { "response": "Student not found" }


