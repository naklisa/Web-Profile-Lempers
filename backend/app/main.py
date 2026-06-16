from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import app
from .database import engine, Base


@app.on_event('startup')
def on_startup():
    try:
        Base.metadata.create_all(bind=engine)
    except Exception:
        pass


app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)
