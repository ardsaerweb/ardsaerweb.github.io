// ============================================================
// Ardsaer — Hero blueprint SVG
// Original abstract revenue-architecture diagram.
// Concentric structural layers + nodes + soft orbit lines.
// ============================================================

function HeroBlueprint() {
  // 5 pillar nodes around an inner ring
  const pillars = [
    { label: "MARKET",   angle: -90 },
    { label: "GTM",      angle: -18 },
    { label: "SYSTEM",   angle: 54 },
    { label: "TALENT",   angle: 126 },
    { label: "CAPITAL",  angle: 198 },
  ];
  const cx = 280, cy = 280;
  const r1 = 80;   // inner core
  const r2 = 140;  // pillar orbit
  const r3 = 210;  // outer ring
  const r4 = 260;  // outermost faint

  const toXY = (angle, r) => {
    const a = (angle * Math.PI) / 180;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  };

  return (
    <svg className="blueprint-svg" viewBox="0 0 560 560" aria-hidden="true">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C99A45" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C99A45" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glow */}
      <circle cx={cx} cy={cy} r={r3 + 30} fill="url(#coreGlow)" />

      {/* Outer faint rings */}
      <circle className="ring" cx={cx} cy={cy} r={r4} strokeDasharray="2 6" />
      <circle className="ring" cx={cx} cy={cy} r={r3} />
      <circle className="ring ring-strong" cx={cx} cy={cy} r={r2} />
      <circle className="ring" cx={cx} cy={cy} r={r1} />

      {/* Cross axes */}
      <line className="axis" x1={cx - r4} y1={cy} x2={cx + r4} y2={cy} />
      <line className="axis" x1={cx} y1={cy - r4} x2={cx} y2={cy + r4} />

      {/* Tick marks on outer ring */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        const x1 = cx + Math.cos(a) * r3;
        const y1 = cy + Math.sin(a) * r3;
        const x2 = cx + Math.cos(a) * (r3 + 8);
        const y2 = cy + Math.sin(a) * (r3 + 8);
        return <line key={i} className="axis" x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(201,154,69,0.3)" />;
      })}

      {/* Inner connecting arcs between pillars */}
      {pillars.map((p, i) => {
        const next = pillars[(i + 1) % pillars.length];
        const [x1, y1] = toXY(p.angle, r2);
        const [x2, y2] = toXY(next.angle, r2);
        return (
          <path
            key={"arc" + i}
            className="arc-faint"
            fill="none"
            stroke="rgba(201,154,69,0.22)"
            strokeWidth="1"
            d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`}
          />
        );
      })}

      {/* Radial lines from core to pillars */}
      {pillars.map((p, i) => {
        const [x1, y1] = toXY(p.angle, r1);
        const [x2, y2] = toXY(p.angle, r2);
        return <line key={"rad" + i} className="arc" x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(201,154,69,0.55)" />;
      })}

      {/* Outer label brackets */}
      {pillars.map((p, i) => {
        const [lx, ly] = toXY(p.angle, r3 + 26);
        return (
          <g key={"lbl" + i}>
            <line
              className="arc"
              x1={toXY(p.angle, r2)[0]}
              y1={toXY(p.angle, r2)[1]}
              x2={toXY(p.angle, r3)[0]}
              y2={toXY(p.angle, r3)[1]}
              stroke="rgba(201,154,69,0.4)"
              strokeDasharray="2 3"
            />
            <text
              className="label"
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {String(i + 1).padStart(2, "0")} · {p.label}
            </text>
          </g>
        );
      })}

      {/* Pillar nodes */}
      {pillars.map((p, i) => {
        const [x, y] = toXY(p.angle, r2);
        return (
          <g key={"node" + i}>
            <circle className="node" cx={x} cy={y} r="8" />
            <circle className="node-fill" cx={x} cy={y} r="3" />
          </g>
        );
      })}

      {/* Core */}
      <circle cx={cx} cy={cy} r="42" fill="rgba(6,17,31,0.6)" stroke="rgba(201,154,69,0.5)" />
      <text className="label" x={cx} y={cy - 8} textAnchor="middle">REVENUE</text>
      <text className="center-text" x={cx} y={cy + 14} textAnchor="middle">architecture</text>

      {/* Coordinate labels */}
      <text className="label label-faint" x={cx + r4 + 14} y={cy + 4}>EAST</text>
      <text className="label label-faint" x={cx - r4 - 14} y={cy + 4} textAnchor="end">WEST</text>
      <text className="label label-faint" x={cx} y={cy - r4 - 14} textAnchor="middle">N</text>
      <text className="label label-faint" x={cx} y={cy + r4 + 22} textAnchor="middle">S</text>

      {/* Coordinate marks bottom-left */}
      <text className="label label-faint" x="20" y="540">FIG. 01 — REVENUE OPERATING MODEL</text>
      <text className="label label-faint" x="540" y="540" textAnchor="end">v.2026</text>
    </svg>
  );
}

window.HeroBlueprint = HeroBlueprint;
