# MsAnitaArt Premium Website – Implementation Walkthrough

The development of the MsAnitaArt premium carpet manufacturing website is complete. Below is a walkthrough of what was accomplished, integrating the luxury editorial aesthetic entirely built upon a scalable `React` and `FastAPI` stack.

## Architecture Highlights

> [!NOTE]
> **Scalability Focus:** The system is divided into a frontend (React+Vite) and backend (FastAPI). All product arrays and brand storytelling are driven by clean JSON files, allowing seamless non-technical edits in the future.

### Frontend: Luxury Editorial Aesthetic
1. **Design System:** Custom Tailwind integration with a tailored color palette: `luxury-ivory`, `luxury-bone`, `luxury-gold`, `luxury-olive`, and `luxury-navy`.
2. **Typography Setup:** "Playfair Display" for elegant serif headlines and "Inter" for clean, readable body copy.
3. **Animations:** Tasteful use of AOS library for subtle fade-ups and the Hero wrapper's slow "Ken Burns" pan effect.
4. **Data Management:** All text in the "Our Story" section and the product images load seamlessly from `src/data/story.json` and `src/data/products.json`.

### Backend: Enquire Processing
1. **Lightweight FastAPI System:** A fast backend built strictly to handle form storage via SQLite `(msanitaart.db)`.
2. **Integration:** `EnquiryForm.jsx` submits requests payload correctly to `/api/enquiries`, gracefully resolving with an attractive visual receipt.

## Detailed Page Layouts

- **Home (`/`)**: A highly evocative Hero screen with an impactful scroll-down into brand pillars. Displays the distinct categories loaded from `.json`.
- **Our Heritage (`/about`)**: Includes a dedicated GI-tag educational block and an elegant text-driven `ProcessTimeline.jsx`.
- **Collections (`/products`)**: A scalable, masonry-like grid displaying all placeholder/dummy data of luxury rug classes. You can edit `products.json` at any point to replace these with your actual carpet designs.
- **Contact & Enquire (`/contact`)**: Combines corporate details with a bespoke, fully integrated `FastAPI` submission form.

> [!TIP]
> **Replacing Images & Data:** Navigate to `c:\Users\GAURAV MAURYA\Desktop\MsAnitaArt\frontend\src\data\products.json` to swap the placeholder Unsplash images. Changes will reflect instantly on the UI without writing any HTML!

## How to Run It Locally

Since the codebase is fully ready, you can start the servers directly from your terminal:

**1. Run the Backend API**
Open a terminal in `Desktop\MsAnitaArt\backend`:
```cmd
venv\Scripts\activate
uvicorn main:app --reload
```

**2. Run the Frontend App**
Open a second terminal in `Desktop\MsAnitaArt\frontend`:
```cmd
npm run dev
```

Your luxury portfolio site will be live at `http://localhost:5173`.
