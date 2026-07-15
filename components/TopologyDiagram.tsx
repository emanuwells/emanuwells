"use client";

import { useLang } from "@/lib/i18n";

interface NodeDef {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  variant: "pipeline" | "observer" | "hub" | "sink";
}

const NODE_W_SM = 132;
const NODE_H = 34;
const NODE_W_LG = 150;

const pipelineNodes: NodeDef[] = [
  { id: "p1", x: 16, y: 30, w: NODE_W_SM, h: NODE_H, label: "Data Paladin", variant: "pipeline" },
  { id: "p2", x: 16, y: 78, w: NODE_W_SM, h: NODE_H, label: "INE Pipeline", variant: "pipeline" },
  { id: "p3", x: 16, y: 126, w: NODE_W_SM, h: NODE_H, label: "Medidata", variant: "pipeline" },
  { id: "p4", x: 16, y: 174, w: NODE_W_SM, h: NODE_H, label: "Forms → Lake", variant: "pipeline" },
  { id: "p5", x: 16, y: 222, w: NODE_W_SM, h: NODE_H, label: "Traffic Flow", variant: "pipeline" },
  { id: "p6", x: 16, y: 270, w: NODE_W_SM, h: NODE_H, label: "Risk Improve", variant: "pipeline" },
];

const serverNode: NodeDef = {
  id: "server",
  x: 16,
  y: 340,
  w: NODE_W_SM,
  h: NODE_H,
  label: "Servidor + 5 postos",
  variant: "pipeline",
};

const overseerNode: NodeDef = { id: "overseer", x: 320, y: 90, w: NODE_W_LG, h: 44, label: "Overseer", variant: "observer" };
const wardenNode: NodeDef = { id: "warden", x: 320, y: 318, w: NODE_W_LG, h: 44, label: "Warden", variant: "observer" };
const apiNode: NodeDef = { id: "api", x: 580, y: 204, w: NODE_W_LG, h: 44, label: "WELLS_API", variant: "sink" };
const hubNode: NodeDef = { id: "hub", x: 580, y: 30, w: NODE_W_LG, h: 44, label: "MAIATRON-HUB", variant: "hub" };
const dashNode: NodeDef = { id: "dash", x: 580, y: 378, w: NODE_W_LG, h: 44, label: "BI / Dashboards", variant: "sink" };

function curve(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
}

function nodeColor(variant: NodeDef["variant"]) {
  switch (variant) {
    case "hub":
      return "var(--color-accent-2)";
    case "observer":
      return "var(--color-accent)";
    case "sink":
      return "var(--color-text-muted)";
    default:
      return "var(--color-border)";
  }
}

function Node({ node }: { node: NodeDef }) {
  const isHighlight = node.variant === "hub" || node.variant === "observer";
  return (
    <g>
      <rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={7}
        fill="var(--color-surface)"
        stroke={nodeColor(node.variant)}
        strokeWidth={isHighlight ? 1.4 : 1}
      />
      {isHighlight && (
        <circle
          cx={node.x + 12}
          cy={node.y + node.h / 2}
          r={3}
          fill={node.variant === "hub" ? "var(--color-accent-2)" : "var(--color-ok)"}
          className="pulse-soft"
        />
      )}
      <text
        x={node.x + (isHighlight ? 24 : 12)}
        y={node.y + node.h / 2 + 4}
        fontFamily="var(--font-mono)"
        fontSize={11}
        fill={isHighlight ? "var(--color-text)" : "var(--color-text-muted)"}
      >
        {node.label}
      </text>
    </g>
  );
}

export default function TopologyDiagram() {
  const { lang } = useLang();

  const edges: [NodeDef, NodeDef][] = [
    ...pipelineNodes.map((p): [NodeDef, NodeDef] => [p, overseerNode]),
    [serverNode, wardenNode],
    [overseerNode, apiNode],
    [wardenNode, apiNode],
    [apiNode, dashNode],
    [hubNode, overseerNode],
    [hubNode, wardenNode],
    [hubNode, apiNode],
  ];

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 760 420"
        className="w-full h-auto"
        role="img"
        aria-label={
          lang === "pt"
            ? "Diagrama de topologia: pipelines a alimentar o Overseer, servidor a alimentar o Warden, ambos a convergir no WELLS_API, unificados pelo MAIATRON-HUB"
            : "Topology diagram: pipelines feeding Overseer, server feeding Warden, both converging into WELLS_API, unified by MAIATRON-HUB"
        }
      >
        {edges.map(([a, b], i) => {
          const x1 = a.x + a.w;
          const y1 = a.y + a.h / 2;
          const x2 = b.x;
          const y2 = b.y + b.h / 2;
          const isHubEdge = a.id === "hub";
          return (
            <path
              key={i}
              d={curve(x1, y1, x2, y2)}
              fill="none"
              stroke={isHubEdge ? "var(--color-accent-2)" : "var(--color-accent)"}
              strokeOpacity={isHubEdge ? 0.35 : 0.55}
              strokeWidth={1.2}
              className="flow-line"
            />
          );
        })}

        {pipelineNodes.map((n) => (
          <Node key={n.id} node={n} />
        ))}
        <Node node={serverNode} />
        <Node node={overseerNode} />
        <Node node={wardenNode} />
        <Node node={apiNode} />
        <Node node={hubNode} />
        <Node node={dashNode} />
      </svg>
    </div>
  );
}
