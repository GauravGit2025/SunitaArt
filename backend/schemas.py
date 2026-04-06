from pydantic import BaseModel
from typing import Optional

class EnquiryCreate(BaseModel):
    fullName: str
    companyName: Optional[str] = None
    email: str
    phone: Optional[str] = None
    country: Optional[str] = None
    productInterest: str
    quantity: Optional[str] = None
    message: str

class EnquiryResponse(BaseModel):
    id: int
    full_name: str
    email: str

    class Config:
        from_attributes = True
