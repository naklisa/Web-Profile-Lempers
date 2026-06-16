from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from ..models.aspirasi import Aspirasi
from ..schemas.aspirasi import AspirasiCreate, AspirasiRead

router = APIRouter()


@router.get('/', response_model=list[AspirasiRead])
def list_aspirasi(db: Session = Depends(get_db)):
    return db.query(Aspirasi).filter(Aspirasi.is_public.is_(True)).order_by(Aspirasi.upvotes.desc(), Aspirasi.created_at.desc()).all()


@router.post('/', response_model=AspirasiRead, status_code=status.HTTP_201_CREATED)
def create_aspirasi(aspirasi_in: AspirasiCreate, db: Session = Depends(get_db)):
    aspirasi = Aspirasi(**aspirasi_in.model_dump())
    db.add(aspirasi)
    db.commit()
    db.refresh(aspirasi)
    return aspirasi


@router.post('/{aspirasi_id}/upvote', response_model=AspirasiRead)
def upvote_aspirasi(aspirasi_id: int, db: Session = Depends(get_db)):
    aspirasi = db.get(Aspirasi, aspirasi_id)
    if not aspirasi:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Aspirasi not found')
    aspirasi.upvotes += 1
    db.commit()
    db.refresh(aspirasi)
    return aspirasi
