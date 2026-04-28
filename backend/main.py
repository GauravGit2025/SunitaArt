from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
import os
from dotenv import load_dotenv

load_dotenv()

import models
import schemas
import database

app = FastAPI(
    title="Sunita Rugs API",
    version="1.0.0",
    description="Backend API for Sunita Rugs premium website"
)

# -------------------------------       
# ✅ CORS Configuration
# -------------------------------
frontend_url = os.getenv("FRONTEND_URL")
if frontend_url:
    origins = [url.strip() for url in frontend_url.split(",")]
else:
    origins = ["*"]  # Fallback for local development

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------
# ✅ Startup Event (BEST PRACTICE)
# -------------------------------
@app.on_event("startup")
def startup():
    # Create DB + tables automatically
    models.Base.metadata.create_all(bind=database.engine)


# -------------------------------
# ✅ Health Check Route
# -------------------------------
@app.get("/")
def health_check():
    return {"message": "Sunita Rugs API is running 🚀"}

# -------------------------------
# ✅ Ping Route (For Keep-Awake Cron Job)
# -------------------------------
@app.get("/ping")
def ping_db(db: Session = Depends(database.get_db)):
    try:
        # Executes a simple query to keep the Supabase database awake
        db.execute(text("SELECT 1"))
        return {"status": "ok", "message": "Backend & Database are awake! ⏰"}
    except Exception as e:
        return {"status": "error", "message": str(e)}




# -------------------------------
# ✅ Enquiry API
# -------------------------------
@app.post("/api/enquiries", response_model=schemas.EnquiryResponse)
def create_enquiry(
    enquiry: schemas.EnquiryCreate,
    db: Session = Depends(database.get_db)
):
    try:
        db_enquiry = models.Enquiry(
            full_name=enquiry.fullName,
            company_name=enquiry.companyName,
            email=enquiry.email,
            phone=enquiry.phone,
            country=enquiry.country,
            product_interest=enquiry.productInterest,
            quantity=enquiry.quantity,
            message=enquiry.message
        )

        db.add(db_enquiry)
        db.commit()
        db.refresh(db_enquiry)

        return db_enquiry


    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Failed to save enquiry")


# -------------------------------
# ✅ Products API (Optional)
# -------------------------------
@app.get("/api/products")
def get_products():
    return {
        "status": "Products are currently served via frontend JSON for performance"
    }