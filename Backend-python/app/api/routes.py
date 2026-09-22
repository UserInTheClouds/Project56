from fastapi import APIRouter
from app.services import git_analyzer

router = APIRouter()

@router.get("/analyze")
async def analyze_repo(repo_url: str):
    # This acts as an endpoint to trigger analysis
    result = git_analyzer.perform_analysis(repo_url)
    return {"status": "success", "data": result}
