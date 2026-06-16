from sqlalchemy import Boolean, Column, DateTime, Integer, String, Text
from sqlalchemy.sql import func

from ..database import Base


class Aspirasi(Base):
    __tablename__ = 'aspirasi'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(128), nullable=False)
    message = Column(Text, nullable=False)
    category = Column(String(80), nullable=True)
    upvotes = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    is_public = Column(Boolean, default=True)
