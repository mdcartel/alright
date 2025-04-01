# main.py
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse, FileResponse, StreamingResponse, RedirectResponse
from starlette.staticfiles import StaticFiles
import os
import httpx
from pathlib import Path
from urllib.parse import urljoin

app = FastAPI()

# Define the base directory for sites
SITES_DIR = Path("sites").resolve()

# Function to get the appropriate file response
def get_file_response(file_path: Path):
    if file_path.suffix == '.html':
        return HTMLResponse(content=file_path.read_text(encoding='utf-8'))
    else:
        return FileResponse(file_path)

# Function to safely join paths and check if the result is within SITES_DIR
def safe_join(base, *paths):
    try:
        final_path = base.joinpath(*paths).resolve()
        if not final_path.is_relative_to(base):
            return None
        return final_path
    except (TypeError, ValueError):
        return None

# Dynamic route handler
@app.get("/{path:path}")
async def catch_all(request: Request, path: str):
    if path == "":
        file_path = safe_join(SITES_DIR, "root", "index.html")
        if file_path and file_path.exists():
            return HTMLResponse(content=file_path.read_text(encoding='utf-8'))
    
    full_path = safe_join(SITES_DIR, path)
    
    if full_path is None:
        raise HTTPException(status_code=403, detail="Access forbidden")
    
    if full_path.is_dir():
        index_path = full_path / "index.html"
        if index_path.exists():
            return HTMLResponse(content=index_path.read_text(encoding='utf-8'))
    
    if full_path.is_file():
        return get_file_response(full_path)
    
    #raise HTTPException(status_code=404, detail="File not found")
    file_path = safe_join(SITES_DIR, "404", "index.html")
    if file_path and file_path.exists():
        return HTMLResponse(content=file_path.read_text(encoding='utf-8'))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)