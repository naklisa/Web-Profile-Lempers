from datetime import datetime
from pydantic import BaseModel, ConfigDict


class NewsBase(BaseModel):
    title: str
    excerpt: str
    category: str
    image: str | None = None


class NewsCreate(NewsBase):
    pass


class NewsRead(NewsBase):
    id: int
    published_at: datetime
    model_config = ConfigDict(from_attributes=True)
