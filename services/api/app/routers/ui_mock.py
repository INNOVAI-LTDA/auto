from fastapi import APIRouter

from app.schemas.ui import (
    ClientRequestSummary,
    FactoryRunSummary,
    FindingSummary,
    UiMockPayload,
)

router = APIRouter()


@router.get("/summary", response_model=UiMockPayload)
def get_ui_mock_summary() -> UiMockPayload:
    return UiMockPayload(
        client_requests=[
            ClientRequestSummary(
                id="REQ-001",
                title="App de cadastro de clientes",
                status="Planejamento tecnico",
                pending_questions=2,
                next_step="Confirmar primeira versao util",
            ),
            ClientRequestSummary(
                id="REQ-002",
                title="Calculadora de custo IA",
                status="Em construcao",
                pending_questions=0,
                next_step="Validacao interna",
            ),
        ],
        factory_runs=[
            FactoryRunSummary(
                id="RUN-CLIENT-REG-001",
                title="App de cadastro de clientes",
                lifecycle_stage="DSG",
                current_station="G2 Arquitetura",
                control_mode="AUTO",
                artifacts_total=7,
                findings_open=3,
                atomic_tasks_total=14,
            ),
            FactoryRunSummary(
                id="RUN-COST-AI-001",
                title="Calculadora de custo IA",
                lifecycle_stage="LAB",
                current_station="G4 Execucao IA",
                control_mode="MAN-override",
                artifacts_total=11,
                findings_open=1,
                atomic_tasks_total=22,
            ),
        ],
        findings=[
            FindingSummary(
                id="FIND-001",
                defect_type="unsupported",
                description="RF-004 nao possui endpoint correspondente.",
                origin_area="solution_architecture",
                detection_area="quality_testing",
                correction_route="G2 Arquitetura",
            ),
            FindingSummary(
                id="FIND-002",
                defect_type="ambiguous",
                description="Termo 'rapido' sem criterio verificavel.",
                origin_area="product_requirements",
                detection_area="quality_testing",
                correction_route="G1 Requisitos",
            ),
        ],
    )
