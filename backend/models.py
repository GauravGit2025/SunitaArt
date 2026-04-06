from sqlalchemy import Column, Integer, String, Text
from database import Base

class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(150), index=True)
    company_name = Column(String(150), nullable=True)
    email = Column(String(150), index=True)
    phone = Column(String(50), nullable=True)
    country = Column(String(100), nullable=True)
    product_interest = Column(String(100))
    quantity = Column(String(100), nullable=True)
    message = Column(Text)
