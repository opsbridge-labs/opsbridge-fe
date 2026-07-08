import { Activity, CheckCircle2, ShieldAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import { renderTrend } from "../chart/d3-trend";
import { useDashboard } from "./hooks";

const fallback = {
  metrics: [
    { key: "pending_changes", label: "pending changes", value: 11, unit: "req", target: 12 },
    { key: "audit_p95_ms", label: "audit p95", value: 142, unit: "ms", target: 180 },
    { key: "rollback_ready", label: "rollback ready", value: 99, unit: "%", target: 98 }
  ],
  events: [
    { id: "ops-319", title: "Enterprise plan limit change", status: "awaiting approval", severity: "high", updatedAt: "2026-07-08" },
    { id: "ops-302", title: "Feature flag rollout", status: "approved", severity: "medium", updatedAt: "2026-07-08" },
    { id: "ops-288", title: "Rollback audit replay", status: "ready", severity: "low", updatedAt: "2026-07-07" }
  ],
  trend: [{ day: "Mon", value: 9 }, { day: "Tue", value: 13 }, { day: "Wed", value: 10 }, { day: "Thu", value: 16 }, { day: "Fri", value: 11 }],
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
