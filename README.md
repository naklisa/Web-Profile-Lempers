# Lempers — Aspirasi & News Platform

Proyek ini terdiri dari dua bagian: backend (FastAPI/Python) dan frontend (Next.js/React). Backend menyediakan API untuk user, aspirasi, dan berita; frontend adalah antarmuka pengguna Next.js.

## Struktur singkat
- backend/: API FastAPI
- frontend/: Aplikasi Next.js

## Prasyarat
- Python 3.10+ dan `pip`
- Node.js 18+ dan `npm` (atau `pnpm`/`yarn`)

## Menjalankan backend
1. Masuk ke folder backend:

```bash
cd backend
```

2. (Opsional) Buat dan aktifkan virtual environment:

Windows (PowerShell):

```powershell
python -m venv .venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
.\.venv\Scripts\Activate.ps1
```

Linux/macOS (bash):

```bash
python -m venv .venv
source .venv/bin/activate
```

3. Install dependensi:

```bash
pip install -r requirements.txt
```

4. Jalankan server pengembangan:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API akan tersedia di `http://localhost:8000`. Periksa konfigurasi di [backend/app/config.py](backend/app/config.py).

## Menjalankan frontend
1. Masuk ke folder frontend:

```bash
cd frontend
```

2. Install dependensi dan jalankan:

```bash
npm install
npm run dev
```

Frontend akan tersedia di `http://localhost:3000`.

## Catatan tentang database & environment
- Lihat model di [backend/app/models](backend/app/models) untuk struktur data.
- Jika backend menggunakan database eksternal, set environment variable yang diperlukan sesuai dengan `app/config.py`.

## Build produksi (singkat)
- Backend: jalankan dengan `uvicorn`/`gunicorn` tanpa `--reload` atau jalankan di ASGI server di container.
- Frontend: jalankan `npm run build` lalu `npm start`.

## Kontak
Untuk kontribusi atau pertanyaan, buka issue di repositori atau hubungi pemilik proyek.
