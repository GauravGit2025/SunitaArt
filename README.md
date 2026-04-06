# MsAnitaArt - Luxury Handmade Carpet Brand

Welcome to the MsAnitaArt repository! This project is a premium, responsive, editorial-style website for a Bhadohi-based handmade carpet manufacturer. It highlights heritage, craftsmanship, and GI-tagged authenticity while maintaining a minimalist, luxury aesthetic.

This monorepo contains both the **Frontend** (React + Vite) and the **Backend** (FastAPI).

## 🌟 Features

- **Premium Editorial Design:** A highly aesthetic UI with luxurious styling using Tailwind CSS.
- **Scroll Animations:** Integrated smooth reveal animations using AOS (Animate On Scroll).
- **Responsive Layout:** fully optimized for desktops, tablets, and mobile devices.
- **Robust API:** A high-performance Python backend powered by FastAPI.
- **Database Integration:** SQLAlchemy integration for clean relational data modeling.

## 💻 Tech Stack

### Frontend
- **Framework:** [React 18](https://reactjs.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [AOS](https://michalsnik.github.io/aos/)

### Backend
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/)
- **Server:** [Uvicorn](https://www.uvicorn.org/)
- **ORM:** [SQLAlchemy](https://www.sqlalchemy.org/)
- **Data Validation:** [Pydantic](https://pydantic-docs.helpmanual.io/)

---

## 📂 Project Structure

```
MsAnitaArt/
├── backend/                  # Python FastAPI Backend
│   ├── main.py               # Application entry point
│   ├── database.py           # Database connection & session configurations
│   ├── models.py             # SQLAlchemy database models
│   ├── schemas.py            # Pydantic schemas for data validation
│   └── requirements.txt      # Python dependencies
├── frontend/                 # React Frontend
│   ├── src/                  # React source code (components, pages, etc.)
│   ├── package.json          # Node.js dependencies
│   ├── tailwind.config.js    # Tailwind CSS configuration
│   └── vite.config.js        # Vite build tool configuration
└── README.md                 # Project documentation
```

---

## 🚀 Setup & Installation

### Prerequisites

- **Node.js** (v16+)
- **Python** (v3.9+)
- **Git**

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/MsAnitaArt.git
cd MsAnitaArt
```

### 2. Backend Setup

Open a terminal and navigate to the `backend` directory:

```bash
cd backend
```

Create a virtual environment:
```bash
python -m venv venv
```

Activate the virtual environment:
- **Windows:** `venv\Scripts\activate`
- **Mac/Linux:** `source venv/bin/activate`

Install dependencies:
```bash
pip install -r requirements.txt
```

Run the backend server:
```bash
uvicorn main:app --reload
```
The FastAPI documentation will be available at: http://127.0.0.1:8000/docs

### 3. Frontend Setup

Open a new terminal window and navigate to the `frontend` directory:

```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Run the frontend development server:
```bash
npm run dev
```
The web application will be accessible at the local URL provided by Vite (usually http://localhost:5173).

## 🛠️ Development

- To add a new database model, update `backend/models.py` and `backend/schemas.py`.
- To style frontend components, standard Tailwind CSS utility classes are supported. Check the `tailwind.config.js` for any custom theme configurations.

## 📄 License

This project is proprietary and confidential. Unauthorized copying or redistribution is strictly prohibited.
