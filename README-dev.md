# AUTO — Guia de Desenvolvimento Local

## Pré-requisitos

- Python 3.11+
- Node.js 20+ e npm
- Docker e Docker Compose (para infraestrutura local)

## Rodando o backend FastAPI

```bash
cd services/api
python -m venv .venv
source .venv/bin/activate
pip install -e .
uvicorn app.main:app --reload --port 8000
```

No Windows (PowerShell), a ativação da venv é:

```powershell
.venv\Scripts\activate
```

## Rodando o Client Portal

```bash
cd apps/client-portal
npm install
npm run dev -- --port 3000
```

## Rodando o Factory Cockpit

```bash
cd apps/factory-cockpit
npm install
npm run dev -- --port 3001
```

## Endpoints iniciais

Backend FastAPI (`services/api`):

- `GET /`
- `GET /health`
- `GET /ui-mock/summary`

## Portas usadas

- Backend API: http://localhost:8000
- Client Portal: http://localhost:3000
- Factory Cockpit: http://localhost:3001

## Estrutura atual do repositório

```text
apps/
  client-portal/      # AUTO Commercial
  factory-cockpit/    # AUTO Industrial
services/
  api/                # Backend FastAPI
docs/
  ui/                 # Documentação de UI
scripts/              # Scripts utilitários
```

## Próximos passos

1. Subir infraestrutura local (Postgres + Redis):
   ```bash
   docker compose -f docker-compose.dev.yml up -d
   ```
2. Copiar variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
3. Executar o script de verificação estrutural:
   ```bash
   python scripts/check_repo_structure.py
   ```

Frase-guia desta etapa: **Primeiro o chassi. Depois o motor. Depois a telemetria do foguete.**
