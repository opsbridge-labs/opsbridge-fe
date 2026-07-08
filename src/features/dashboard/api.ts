import { api } from "../../shared/api/client";
import type { DashboardMetric, TrendPoint, WorkflowEvent } from "./types";

export const getDashboard = () =>
  api.get("dashboard").json<{ metrics: DashboardMetric[]; events: WorkflowEvent[]; trend: TrendPoint[] }>();

export const updateEventStatus = (id: string, status: string) =>
  api.patch(`events/${id}/status`, { json: { status } }).json<WorkflowEvent>();
