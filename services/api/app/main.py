from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import health, ui_mock

app = FastAPI(
    title="AUTO Framework API",
    version="0.1.0",
    description="API inicial do AUTO Framework para dados mockados de UI e operacao.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/health", tags=["health"])
app.include_router(ui_mock.router, prefix="/ui-mock", tags=["ui-mock"])


@app.get("/")
def root() -> dict[str, str]:
    return {
        "service": "AUTO Framework API",
        "status": "running",
        "version": "0.1.0",
    }
