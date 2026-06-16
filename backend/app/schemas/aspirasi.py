from datetime import datetime
from pydantic import BaseModel, ConfigDict


class AspirasiBase(BaseModel):
    name: str
    message: str
    category: str | None = None


class AspirasiCreate(AspirasiBase):
    pass


class AspirasiRead(AspirasiBase):
    id: int
    upvotes: int
    created_at: datetime
    is_public: bool
    model_config = ConfigDict(from_attributes=True)
