"use client";

export default function HUDCorners() {
  const corners = [
    {
      pos: { top: "68px", left: "8px" },
      path: "M2 38V2H38",
      circle: { cx: 2, cy: 2 },
    },
    {
      pos: { top: "68px", right: "8px" },
      path: "M54 38V2H18",
      circle: { cx: 54, cy: 2 },
    },
    {
      pos: { bottom: "38px", left: "8px" },
      path: "M2 18V54H38",
      circle: { cx: 2, cy: 54 },
    },
    {
      pos: { bottom: "38px", right: "8px" },
      path: "M54 18V54H18",
      circle: { cx: 54, cy: 54 },
    },
  ];

  return (
    <>
      {corners.map((c, i) => (
        <div
          key={i}
          className="fixed pointer-events-none"
          style={{ width: 56, height: 56, zIndex: 50, ...c.pos }}
        >
          <svg viewBox="0 0 56 56" fill="none" width="100%" height="100%">
            <path
              d={c.path}
              stroke="rgba(0,212,255,0.45)"
              strokeWidth="1.5"
            />
            <circle
              cx={c.circle.cx}
              cy={c.circle.cy}
              r={3}
              fill="rgba(0,212,255,0.7)"
            />
          </svg>
        </div>
      ))}
    </>
  );
}
