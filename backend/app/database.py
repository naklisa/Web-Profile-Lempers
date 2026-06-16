from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
from sqlalchemy.orm import declarative_base, sessionmaker

from .config import settings


def create_engine_with_fallback(database_url: str):
    if database_url.startswith('sqlite'):
        return create_engine(database_url, future=True, connect_args={'check_same_thread': False})

    engine = create_engine(database_url, future=True)
    try:
        with engine.connect():
            pass
    except OperationalError:
        engine.dispose()
        fallback_url = 'sqlite:///./lpi_db.sqlite3'
        return create_engine(fallback_url, future=True, connect_args={'check_same_thread': False})

    return engine


engine = create_engine_with_fallback(settings.database_url)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False, future=True)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
