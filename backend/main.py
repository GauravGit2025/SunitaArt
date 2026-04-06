from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import models
import schemas
import database

app = FastAPI(
    title="MsAnitaArt API",
    version="1.0.0",
    description="Backend API for MsAnitaArt premium website"
)

# -------------------------------
# ✅ CORS Configuration
# -------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ⚠️ Change this in production
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
    return {"message": "MsAnitaArt API is running 🚀"}


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