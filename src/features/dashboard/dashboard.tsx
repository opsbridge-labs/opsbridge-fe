import { Activity, CheckCircle2, ShieldAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import { renderTrend } from "../chart/d3-trend";
import { useDashboard } from "./hooks";

const fallback = {
  metrics: [
    { key: "audit_search_p95_ms", label: "audit search p95 ms", value: 184, unit: "ms", target: 220 },
    { key: "rollback_duration_ms", label: "rollback duration ms", value: 92, unit: "%", target: 90 },
    { key: "state_transition_success_rate", label: "state transition success rate", value: 37, unit: "events", target: 30 },
  ],
  events: [
    { id: "evt-1", title: "change request state machine", status: "requested", severity: "high", updatedAt: "2026-07-08" },
    { id: "evt-2", title: "approval console", status: "approved", severity: "medium", updatedAt: "2026-07-08" },
  ],
  trend: [{ day: "Mon", value: 12 }, { day: "Tue", value: 18 }, { day: "Wed", value: 33 }, { day: "Thu", value: 27 }, { day: "Fri", value: 41 }],
} as const;

export const Dashboard = () => {
  const query = useDashboard();
  const data = query.data ?? fallback;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) renderTrend(svgRef.current, [...data.trend]);
  }, [data.trend]);

  return (
    <main className="shell">
      <section className="header">
        <div>
          <p>Frontend / Product Engineer project</p>
          <h1>OpsBridge</h1>
          <span>Customer configuration changes need auditable approval, apply, and rollback across new and legacy consoles.</span>
        </div>
        <CheckCircle2 aria-hidden />
      </section>
      <section className="metrics">
        {data.metrics.map((metric) => (
          <article key={metric.key}>
            <Activity aria-hidden />
            <strong>{metric.value}{metric.unit}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>
      <section className="workbench">
        <div>
          <h2>Live workflow</h2>
          {data.events.map((event) => (
            <button key={event.id} className={event.severity}>
              <ShieldAlert aria-hidden />
              <span>{event.title}</span>
              <small>{event.status} · {event.updatedAt}</small>
            </button>
          ))}
        </div>
        <svg ref={svgRef} role="img" aria-label="D3 trend chart" />
      </section>
    </main>
  );
};
