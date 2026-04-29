from pydantic import BaseModel, Field
from typing import Optional

class EnquiryCreate(BaseModel):
    fullName: str = Field(..., max_length=150)
    companyName: Optional[str] = Field(None, max_length=150)
    email: str = Field(..., max_length=150)
    phone: Optional[str] = Field(None, max_length=50)
    country: Optional[str] = Field(None, max_length=100)
    productInterest: str = Field(..., max_length=100)
    quantity: Optional[str] = Field(None, max_length=100)
    message: str = Field(..., max_length=2000)

class EnquiryResponse(BaseModel):
    id: int
    full_name: str
    email: str

    class Config:
        from_attributes = True
