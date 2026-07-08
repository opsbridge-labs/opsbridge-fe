import * as d3 from "d3";
import type { TrendPoint } from "../dashboard/types";

export const renderTrend = (node: SVGSVGElement, points: TrendPoint[]) => {
  const width = 520;
  const height = 180;
  const svg = d3.select(node).attr("viewBox", `0 0 ${width} ${height}`);
  svg.selectAll("*").remove();
  const x = d3.scalePoint(points.map((p) => p.day), [24, width - 24]);
  const y = d3.scaleLinear([0, d3.max(points, (p) => p.value) ?? 1], [height - 24, 18]);
  const line = d3.line<TrendPoint>().x((p) => x(p.day) ?? 0).y((p) => y(p.value));
  svg.append("path").datum(points).attr("d", line).attr("fill", "none").attr("stroke", "#2563eb").attr("stroke-width", 3);
  svg.selectAll("circle").data(points).join("circle").attr("cx", (p) => x(p.day) ?? 0).attr("cy", (p) => y(p.value)).attr("r", 4);
};
