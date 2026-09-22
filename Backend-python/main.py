from fastapi import FastAPI
from app.api import routes

app = FastAPI(title="Backend Python Analysis API")

# Include the routes from api directory
app.include_router(routes.router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
