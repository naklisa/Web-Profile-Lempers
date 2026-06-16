from sqlalchemy import Column, DateTime, Integer, String, Text
from sqlalchemy.sql import func

from ..database import Base


class News(Base):
    __tablename__ = 'news'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(256), nullable=False)
    excerpt = Column(Text, nullable=False)
    category = Column(String(64), nullable=False)
    image = Column(String(256), nullable=True)
    published_at = Column(DateTime(timezone=True), server_default=func.now())
