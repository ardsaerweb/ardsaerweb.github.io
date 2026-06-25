// ============================================================
// Ardsaer — Framework diagram (5 pillars in orbit)
// ============================================================

function FrameworkDiagram({ active, onHover }) {
  const pillars = [
    { id: 0, lines: ["MARKET THESIS"],          angle: -90 },
    { id: 1, lines: ["GTM DESIGN"],             angle: -18 },
    { id: 2, lines: ["REVENUE SYSTEM"],         angle: 54 },
    { id: 3, lines: ["TALENT &", "LEADERSHIP"], angle: 126 },
    { id: 4, lines: ["CAPITAL", "READINESS"],   angle: 198 },
  ];
  const cx = 280, cy = 280;
  const rPillar = 170;
  const rCore = 78;

  const toXY = (angle, r) => {
    const a = (angle * Math.PI) / 180;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  };

  return (
    <svg className="fw-svg" viewBox="-20 0 600 560" aria-hidden="true">
      <defs>
        <radialGradient id="fwGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C99A45" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C99A45" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r="260" fill="url(#fwGlow)" />

      {/* Outer + inner orbits */}
      <circle className="orbit orbit-dashed" cx={cx} cy={cy} r="240" />
      <circle className="orbit" cx={cx} cy={cy} r={rPillar} />
      <circle className="orbit" cx={cx} cy={cy} r={rCore + 22} />

      {/* Spokes */}
      {pillars.map((p) => {
        const [x1, y1] = toXY(p.angle, rCore + 4);
        const [x2, y2] = toXY(p.angle, rPillar - 26);
        return (
          <line
            key={"sp" + p.id}
            className="spoke"
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={active === p.id ? "rgba(201,154,69,0.55)" : "rgba(248,246,241,0.1)"}
          />
        );
      })}

      {/* Inter-pillar arcs (faint) */}
      {pillars.map((p, i) => {
        const next = pillars[(i + 1) % pillars.length];
        const [x1, y1] = toXY(p.angle, rPillar);
        const [x2, y2] = toXY(next.angle, rPillar);
        return (
          <path
            key={"a" + i}
            d={`M ${x1} ${y1} A ${rPillar} ${rPillar} 0 0 1 ${x2} ${y2}`}
            fill="none"
            stroke="rgba(201,154,69,0.15)"
            strokeWidth="1"
          />
        );
      })}

      {/* Pillar nodes + labels */}
      {pillars.map((p) => {
        const [x, y] = toXY(p.angle, rPillar);
        const isActive = active === p.id;
        const labelOffset = 38;
        const [lx, ly] = toXY(p.angle, rPillar + labelOffset);
        const ta = lx > cx + 30 ? "start" : lx < cx - 30 ? "end" : "middle";
        const multiLine = p.lines.length > 1;
        return (
          <g
            key={"n" + p.id}
            onMouseEnter={() => onHover && onHover(p.id)}
            style={{ cursor: "pointer" }}
          >
            <circle
              className={"pillar-node " + (isActive ? "active" : "")}
              cx={x} cy={y} r="22"
            />
            <text
              className={"pillar-num " + (isActive ? "active" : "")}
              x={x} y={y + 3}
              textAnchor="middle"
            >
              {String(p.id + 1).padStart(2, "0")}
            </text>
            <text
              className={"pillar-label " + (isActive ? "active" : "")}
              x={lx}
              y={multiLine ? ly - 2 : ly + 4}
              textAnchor={ta}
            >
              {p.lines.map((line, i) => (
                <tspan key={i} x={lx} dy={i === 0 ? 0 : "1.3em"}>{line}</tspan>
              ))}
            </text>
          </g>
        );
      })}

      {/* Core */}
      <circle className="core" cx={cx} cy={cy} r={rCore} />
      <text className="core-text" x={cx} y={cy - 14} textAnchor="middle">THE ARDSAER</text>
      <text className="core-text-serif" x={cx} y={cy + 8} textAnchor="middle">framework</text>
      <text className="core-text" x={cx} y={cy + 28} textAnchor="middle">·  FIVE PILLARS  ·</text>
    </svg>
  );
}

window.FrameworkDiagram = FrameworkDiagram;
