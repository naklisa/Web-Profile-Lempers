from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.news import News
from ..schemas.news import NewsCreate, NewsRead

router = APIRouter()


@router.get('/', response_model=list[NewsRead])
def list_news(db: Session = Depends(get_db)):
    return db.query(News).order_by(News.published_at.desc()).all()


@router.post('/', response_model=NewsRead, status_code=status.HTTP_201_CREATED)
def create_news(news_in: NewsCreate, db: Session = Depends(get_db)):
    news = News(**news_in.model_dump())
    db.add(news)
    db.commit()
    db.refresh(news)
    return news


@router.get('/{news_id}', response_model=NewsRead)
def get_news(news_id: int, db: Session = Depends(get_db)):
    news = db.get(News, news_id)
    if not news:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='News item not found')
    return news


@router.delete('/{news_id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_news(news_id: int, db: Session = Depends(get_db)):
    news = db.get(News, news_id)
    if not news:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='News item not found')
    db.delete(news)
    db.commit()
