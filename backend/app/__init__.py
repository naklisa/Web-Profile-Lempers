from fastapi import FastAPI

from .routers import aspirasi, auth, news

app = FastAPI(
    title='LPI Web Profile API',
    description='Backend API untuk portal berita, aspirasi, dan manajemen pengurus UKM Lembaga Pers ITERA.',
    version='0.1.0',
)

app.include_router(news.router, prefix='/api/news', tags=['news'])
app.include_router(aspirasi.router, prefix='/api/aspirasi', tags=['aspirasi'])
app.include_router(auth.router, prefix='/api/auth', tags=['auth'])
