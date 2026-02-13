from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.models.lead import Lead
from app.database import get_db

router = APIRouter()

@router.get("/leads")
def get_leads(db: Session = Depends(get_db)):
    leads = db.query(Lead).all()
    return leads

@router.post("/leads")
def create_lead(lead: dict, db: Session = Depends(get_db)):
    new_lead = Lead(**lead)
    db.add(new_lead)
    db.commit()
    db.refresh(new_lead)
    return new_lead
