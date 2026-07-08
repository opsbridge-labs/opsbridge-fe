export type MetricKey = "audit_search_p95_ms" | "rollback_duration_ms" | "state_transition_success_rate";

export type DashboardMetric = { key: MetricKey; label: string; value: number; unit: string; target: number };
export type WorkflowEvent = { id: string; title: string; status: string; severity: "low" | "medium" | "high"; updatedAt: string };
export type TrendPoint = { day: string; value: number };
