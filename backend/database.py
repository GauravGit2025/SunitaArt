import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv

load_dotenv()

# Read from environment variable
DATABASE_URL = os.getenv("DATABASE_URL")

# Supabase gives postgres://, but sqlalchemy requires postgresql://
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# If no DATABASE_URL is provided, fallback to SQLite for local development
if not DATABASE_URL:
    print("WARNING: No DATABASE_URL found. Falling back to local SQLite database.")
    DATABASE_URL = "sqlite:///./sunitarugs.db"

# SQLite requires check_same_thread=False, PostgreSQL does not
connect_args = {}
if DATABASE_URL.startswith("sqlite"):
    connect_args = {"check_same_thread": False}

engine = create_engine(
    DATABASE_URL, connect_args=connect_args
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
