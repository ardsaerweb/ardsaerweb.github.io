// ============================================================
// Ardsaer — Iconography (thin minimal line icons, custom)
// ============================================================

const Icon = {
  Architecture: (props) => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <rect x="4" y="20" width="10" height="12" />
      <rect x="14" y="14" width="8" height="18" />
      <rect x="22" y="8" width="10" height="24" />
      <path d="M4 4 L32 4" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  ),
  CRO: (props) => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <circle cx="18" cy="13" r="5" />
      <path d="M7 31 C7 23 12 21 18 21 C24 21 29 23 29 31" />
      <path d="M26 9 L30 5 M30 5 L30 9 M30 5 L26 5" strokeLinecap="round" />
    </svg>
  ),
  Capital: (props) => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <path d="M4 30 L10 22 L16 26 L24 14 L32 18" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="18" r="2" fill="currentColor" stroke="none" />
      <path d="M4 32 L32 32" opacity="0.4" />
      <path d="M24 6 L32 6 L32 14" strokeLinecap="round" />
    </svg>
  ),
  GTM: (props) => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <circle cx="18" cy="18" r="13" />
      <circle cx="18" cy="18" r="7" />
      <circle cx="18" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <path d="M18 2 L18 8 M18 28 L18 34 M2 18 L8 18 M28 18 L34 18" />
    </svg>
  ),
  Cadence: (props) => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <circle cx="18" cy="18" r="13" />
      <path d="M18 8 L18 18 L25 22" strokeLinecap="round" />
      <path d="M5 18 L2 18 M34 18 L31 18 M18 5 L18 2 M18 34 L18 31" />
    </svg>
  ),
  Advisory: (props) => (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.25" {...props}>
      <path d="M6 10 L6 26 L14 26 L18 30 L22 26 L30 26 L30 10 Z" />
      <path d="M12 16 L24 16 M12 20 L20 20" strokeLinecap="round" />
    </svg>
  ),
  Arrow: (props) => (
    <svg viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props} className={"arrow " + (props.className || "")}>
      <path d="M1 5 L13 5 M8 1 L13 5 L8 9" />
    </svg>
  ),
  ArrowUpRight: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" {...props}>
      <path d="M7 17 L17 7 M17 7 L17 16 M17 7 L8 7" />
    </svg>
  ),
  Menu: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <path d="M4 8 L20 8 M4 16 L20 16" />
    </svg>
  ),
  Close: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  ),
};

window.Icon = Icon;
