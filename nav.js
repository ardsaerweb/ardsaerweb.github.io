// ============================================================
// Ardsaer — Navigation (top bar + mobile menu)
// ============================================================

const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Framework",    href: "#framework" },
  { label: "Experience",   href: "#experience" },
  { label: "Engagements",  href: "#engagements" },
  { label: "Philosophy",   href: "#philosophy" },
  { label: "Contact",      href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <React.Fragment>
      <header className={"nav " + (scrolled || open ? "nav--scrolled" : "")}>
        <div className="container nav-inner">
          <a href="#top" className="logo" aria-label="Ardsaer home">
            <span className="logo-mark">ARDSAER</span>
            <span className="logo-sub">Revenue Architecture</span>
          </a>

          <nav>
            <ul className="nav-links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="nav-cta-wrap">
            <a href="#contact" className="btn nav-cta">
              Start a Conversation
              <Icon.Arrow />
            </a>
          </div>

          <button
            className="nav-hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <Icon.Close /> : <Icon.Menu />}
          </button>
        </div>
      </header>

      <div className={"mobile-nav " + (open ? "open" : "")}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{ color: "var(--gold-400)", fontStyle: "italic" }}
        >
          Start a conversation →
        </a>
      </div>
    </React.Fragment>
  );
}

window.Nav = Nav;
