from sqlalchemy import Column, Integer, String

from ..database import Base


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(128), unique=True, nullable=False)
    hashed_password = Column(String(256), nullable=False)
