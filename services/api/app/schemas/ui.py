from pydantic import BaseModel


class ClientRequestSummary(BaseModel):
    id: str
    title: str
    status: str
    pending_questions: int
    next_step: str


class FactoryRunSummary(BaseModel):
    id: str
    title: str
    lifecycle_stage: str
    current_station: str
    control_mode: str
    artifacts_total: int
    findings_open: int
    atomic_tasks_total: int


class FindingSummary(BaseModel):
    id: str
    defect_type: str
    description: str
    origin_area: str
    detection_area: str
    correction_route: str


class UiMockPayload(BaseModel):
    client_requests: list[ClientRequestSummary]
    factory_runs: list[FactoryRunSummary]
    findings: list[FindingSummary]
