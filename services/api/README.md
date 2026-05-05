# services/api — AUTO Framework Backend

## Objetivo do serviço

Este serviço expõe a API inicial do AUTO Framework usando FastAPI. Nesta fase, ele oferece endpoints básicos para validação operacional local e para suporte às telas mockadas.

## Como rodar

```bash
cd services/api
python -m venv .venv
source .venv/bin/activate
pip install -e .
uvicorn app.main:app --reload --port 8000
```

## Endpoints atuais

- `GET /`
- `GET /health`
- `GET /ui-mock/summary`

## Estrutura interna

```text
services/api/
  app/
    main.py               # Entrypoint FastAPI
    routers/              # Rotas da API
    schemas/              # Schemas Pydantic
```
