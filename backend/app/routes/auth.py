from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.user import User
from app.database import get_db
from app.utils import create_access_token
from passlib.hash import bcrypt

router = APIRouter()

@router.post("/register")
def register(user: dict, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user["email"]).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    hashed_password = bcrypt.hash(user["password"])
    new_user = User(email=user["email"], password=hashed_password, full_name=user.get("full_name"))
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User created"}

@router.post("/login")
def login(user: dict, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user["email"]).first()
    if not db_user or not bcrypt.verify(user["password"], db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"user_id": db_user.id, "email": db_user.email})
    return {"access_token": token}
