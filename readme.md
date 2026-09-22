

## 1. Frontend (React + Vite)
This is a React application built with Vite. It uses Redux Toolkit (RTK) for state management.
- `src/components/` - Reusable UI components (e.g., `Card.jsx`).
- `src/pages/` - Full-screen views (e.g., `Dashboard.jsx`).
- `src/store/` - Redux Toolkit setup (`store.js` and slices like `repoSlice.js`).
- `src/services/` - API client logic.
- `src/utils/` - Shared helper functions.

## 2. Backend (Node.js + Express)
This is an Express API running in ES Module (`type: "module"`) format, using Prisma for database interactions.
- `src/controllers/` - Route handler logic.
- `src/routes/` - Express router definitions.
- `src/services/` - Core business logic.
- `prisma/` - Database schemas (`schema.prisma`).
- `src/config/` - Environment and app configuration.

## 3. Backend-python (FastAPI)
Located in `Backend-python/`.
A Python microservice for heavy data processing and analysis.
- `main.py` - FastAPI entrypoint.
- `requirements.txt` - Python dependencies.
- `app/api/` - API endpoints.
- `app/services/` - Analysis logic (e.g., git repo analyzer).
- `app/core/` - Configuration settings.

## Getting Started

### 1. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

### 2. Backend (Node.js) Setup
```bash
cd Backend
npm install

# Before running the next commands, you must create a `.env` file inside the `Backend` directory with the following variables:
# DATABASE_URL="postgresql://user:password@localhost:5432/project56?schema=public"
# PORT=3000

# Generate prisma client:
npx prisma generate
npm run dev
```

### 3. Backend-python Setup
```bash
cd Backend-python
py -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt

# (Optional) If you need an API Key, create a `.env` file in the `Backend-python` directory and add:
# API_KEY="your-api-key-here"

py main.py
```
