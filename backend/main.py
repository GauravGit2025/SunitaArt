from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
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
# ✅ Email Helper Function
# -------------------------------
def send_enquiry_email(enquiry: schemas.EnquiryCreate):
    smtp_server = os.getenv("SMTP_SERVER")
    smtp_port = os.getenv("SMTP_PORT")
    sender_email = os.getenv("SENDER_EMAIL")
    sender_password = os.getenv("SENDER_PASSWORD")
    receiver_email = os.getenv("RECEIVER_EMAIL")

    if not all([smtp_server, smtp_port, sender_email, sender_password, receiver_email]):
        print("Email configuration is missing. Skipping email notification.")
        return

    try:
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = f"New Enquiry from {enquiry.fullName} - Sunita Rugs"

        body = f"""
        <html>
          <body style="font-family: sans-serif; line-height: 1.6;">
            <h2 style="color: #2c3e50;">New Enquiry Received</h2>
            <p><strong>Name:</strong> {enquiry.fullName}</p>
            <p><strong>Company:</strong> {enquiry.companyName}</p>
            <p><strong>Email:</strong> {enquiry.email}</p>
            <p><strong>Phone:</strong> {enquiry.phone}</p>
            <p><strong>Country:</strong> {enquiry.country}</p>
            <p><strong>Product Interest:</strong> {enquiry.productInterest}</p>
            <p><strong>Quantity/Dimensions:</strong> {enquiry.quantity}</p>
            <p><strong>Message:</strong><br/>{enquiry.message}</p>
          </body>
        </html>
        """
        msg.attach(MIMEText(body, 'html'))

        server = smtplib.SMTP_SSL(smtp_server, int(smtp_port))
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
        server.quit()
        print("Email notification sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")

# -------------------------------
# ✅ Enquiry API
# -------------------------------
@app.post("/api/enquiries", response_model=schemas.EnquiryResponse)
def create_enquiry(
    enquiry: schemas.EnquiryCreate,
    background_tasks: BackgroundTasks,
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

        # Queue the email notification to run in the background
        background_tasks.add_task(send_enquiry_email, enquiry)

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