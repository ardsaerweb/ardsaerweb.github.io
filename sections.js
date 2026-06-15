// ============================================================
// Ardsaer — Page Sections (hero, problem, capabilities, framework,
// proof, engagements, audience, differentiation, cta, footer)
// ============================================================

// ---------- Hero ----------
function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="hero-grid-overlay" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow-row reveal in">
            <span className="eyebrow">A Revenue Architecture Firm</span>
          </div>
          <h1 className="display reveal in d1">
            Build the revenue&nbsp;engine{" "}
            <em>investors expect.</em>
          </h1>
          <p className="lede reveal in d2">
            Ardsaer helps CEOs, boards, and growth-stage companies design the
            strategy, systems, talent model, and operating cadence required
            to scale predictable revenue.
          </p>
          <div className="hero-microcopy reveal in d3">
            <span>Board Advisory</span>
            <span className="dot" />
            <span>Fractional CRO</span>
            <span className="dot" />
            <span>Equity Raise Support</span>
            <span className="dot" />
            <span>Revenue Architecture</span>
          </div>
          <div className="hero-cta-row reveal in d4">
            <a href="#contact" className="btn btn-primary">
              Start a Conversation
              <Icon.Arrow />
            </a>
            <a href="#capabilities" className="btn btn-ghost">
              Explore Capabilities
              <Icon.Arrow />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal in d2">
          <HeroBlueprint />
        </div>
      </div>

      <div className="scroll-hint">Scroll</div>
    </section>
  );
}

// ---------- Problem ----------
function ProblemSection() {
  const cards = [
    { title: "Capital Raise Pressure", body: "Boards and investors expect a credible path to scale. The growth story must match the operating reality." },
    { title: "Founder-Led Sales No Longer Scaling", body: "The motion that won the first $20M will not deliver the next $50M. New architecture is required." },
    { title: "GTM Teams Misaligned", body: "Sales, marketing, product, and customer success operate as parallel silos rather than one revenue system." },
    { title: "Board Expectations Increasing", body: "Forecasts are challenged. Pipeline is questioned. Leadership needs sharper visibility and operating cadence." },
  ];
  return (
    <section className="section" id="problem" data-screen-label="02 Problem">
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index">01 — The Inflection</span>
            <span className="eyebrow">When growth breaks</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              Growth breaks when{" "}
              <em>revenue systems lag ambition.</em>
            </h2>
            <p className="lede">
              Companies at inflection points often outgrow the systems that got them there.
              Pipeline becomes less predictable. Forecasts lose credibility. Teams fragment.
              Boards want answers. Investors expect a clearer path to scale.{" "}
              <span style={{ color: "var(--ink-900)", fontWeight: 500 }}>
                Ardsaer replaces improvisation with architecture.
              </span>
            </p>
          </div>
        </div>

        <div className="inflection-grid">
          {cards.map((c, i) => (
            <div className="inflection-card" key={i}>
              <div className="ix-num">{String(i + 1).padStart(2, "0")} / 04</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Capabilities ----------
function CapabilitiesSection() {
  const caps = [
    { icon: "Architecture", title: "Revenue Architecture", body: "Design the full revenue system: strategy, segmentation, operating model, pipeline discipline, talent, metrics, and cadence." },
    { icon: "CRO",          title: "Fractional / Interim CRO", body: "Step into leadership when the company needs executive revenue capability before or between full-time hires." },
    { icon: "Capital",      title: "Equity Raise Support", body: "Prepare the growth narrative, revenue model, investor story, operating assumptions, and commercial proof points for capital conversations." },
    { icon: "GTM",          title: "GTM Strategy", body: "Clarify ICP, market focus, segmentation, channel strategy, sales motion, pricing logic, and expansion paths." },
    { icon: "Cadence",      title: "Revenue Operating Cadence", body: "Install weekly, monthly, and quarterly rhythms that improve accountability, forecast confidence, and execution quality." },
    { icon: "Advisory",     title: "Board / CEO Advisory", body: "Help leadership teams make better growth decisions by connecting strategy, execution, capital, and organizational design." },
  ];
  return (
    <section className="section" id="capabilities" data-screen-label="03 Capabilities" style={{ background: "var(--bone-100)" }}>
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index">02 — Capabilities</span>
            <span className="eyebrow">What we do</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              CRO-level capability{" "}
              <em>without unnecessary complexity.</em>
            </h2>
            <p className="lede">
              Six disciplines, one connected system. Engage them individually,
              or as the integrated architecture that holds them together.
            </p>
          </div>
        </div>

        <div className="capability-grid">
          {caps.map((c, i) => {
            const IconCmp = Icon[c.icon];
            return (
              <div className="capability" key={c.title}>
                <span className="cap-num">{String(i + 1).padStart(2, "0")} / 06</span>
                <IconCmp className="cap-icon" />
                <h3 className="h3">{c.title}</h3>
                <p>{c.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- Framework ----------
function FrameworkSection() {
  const pillars = [
    { id: 0, name: "Market Thesis",        body: "Who we serve, why we win, where we focus." },
    { id: 1, name: "GTM Design",           body: "Sales motion, channels, segmentation, pricing, and funnel architecture." },
    { id: 2, name: "Revenue System",       body: "Pipeline, forecasting, metrics, CRM discipline, operating cadence." },
    { id: 3, name: "Talent & Leadership",  body: "Org design, roles, accountability, performance standards, leadership rhythm." },
    { id: 4, name: "Capital Readiness",    body: "Investor story, growth model, board reporting, commercial proof." },
  ];
  const [active, setActive] = React.useState(0);

  return (
    <section className="section section--dark" id="framework" data-screen-label="04 Framework">
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index" style={{ color: "rgba(217,178,107,0.85)" }}>03 — Framework</span>
            <span className="eyebrow">Method</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              The Ardsaer{" "}
              <em>Revenue Architecture Framework.</em>
            </h2>
            <p className="lede">
              Ardsaer aligns the growth story investors hear with the operating
              system teams actually execute. Five pillars, one connected model.
            </p>
          </div>
        </div>

        <div className="framework-stage">
          <div className="framework-diagram">
            <FrameworkDiagram active={active} onHover={setActive} />
          </div>
          <ol className="pillar-list">
            {pillars.map((p) => (
              <li
                className={"pillar " + (active === p.id ? "active" : "")}
                key={p.id}
                onMouseEnter={() => setActive(p.id)}
              >
                <span className="p-num">{String(p.id + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{p.name}</h4>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ---------- Proof / Experience ----------
function ProofSection() {
  const stats = [
    { value: "$250M", arrow: "→", value2: "$1B", label: "Bookings scaled" },
    { value: "$50M", arrow: "→", value2: "$500M", label: "Revenue growth" },
    { value: "225", label: "Cross-functional team members led" },
    { value: "20+", suffix: "yrs", label: "Executive revenue leadership" },
  ];
  return (
    <section className="section section--ink" id="experience" data-screen-label="05 Experience">
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index" style={{ color: "rgba(217,178,107,0.85)" }}>04 — Experience</span>
            <span className="eyebrow">Proof</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              Operator experience.{" "}
              <em>Boardroom relevance.</em>
            </h2>
            <p className="lede">
              Ardsaer brings decades of executive revenue leadership across
              complex B2B markets, SaaS transformation, recurring revenue growth, and
              cross-functional operating models.
            </p>
          </div>
        </div>

        <div className="proof-grid">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <span className="stat-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="stat-value">
                {s.value}
                {s.arrow && <span className="stat-arrow"> {s.arrow} </span>}
                {s.value2}
                {s.suffix && <em> {s.suffix}</em>}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Engagements ----------
function EngagementsSection() {
  const engagements = [
    { title: "Board Advisory",      body: "For boards seeking sharper revenue visibility, stronger GTM governance, and better alignment between growth ambition and operating reality." },
    { title: "Fractional CRO",      body: "For companies that need senior revenue leadership but are not ready for — or do not need — a full-time CRO." },
    { title: "Interim CRO",         body: "For transitions, turnarounds, post-raise execution, or periods where the revenue organization needs immediate leadership." },
    { title: "Equity Raise Advisory", body: "For companies preparing a capital raise and needing to sharpen the commercial story, growth assumptions, and investor confidence." },
    { title: "Strategic Projects",  body: "Focused work on GTM redesign, sales process, forecasting, pipeline quality, org design, pricing, or board reporting." },
  ];
  return (
    <section className="section" id="engagements" data-screen-label="06 Engagements">
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index">05 — Engagements</span>
            <span className="eyebrow">How we work</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              Flexible engagement models for{" "}
              <em>critical growth moments.</em>
            </h2>
            <p className="lede">
              Each engagement is designed around the decision the company is making —
              not the hours on a calendar.
            </p>
          </div>
        </div>

        <div className="engagement-list">
          {engagements.map((e, i) => (
            <a href="#contact" className="engagement" key={e.title}>
              <span className="eng-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
              <Icon.ArrowUpRight className="eng-arrow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Audience ----------
function AudienceSection() {
  const audiences = [
    "Pre-raise companies",
    "Post-raise companies",
    "Founder-led companies moving to professional GTM",
    "PE / VC-backed businesses",
    "Companies hiring their first CRO",
    "Companies between CROs",
    "Boards seeking revenue clarity",
    "CEOs under pressure to scale",
  ];
  return (
    <section className="section section--dark" id="audience" data-screen-label="07 Audience">
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index" style={{ color: "rgba(217,178,107,0.85)" }}>06 — Who we help</span>
            <span className="eyebrow">Audience</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              Built for companies where growth has become a{" "}
              <em>board-level issue.</em>
            </h2>
          </div>
        </div>

        <div className="audience-grid">
          {audiences.map((a, i) => (
            <div className="audience-card" key={a}>
              <span className="aud-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="aud-text">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Differentiation ----------
function DifferentiationSection() {
  const typical = [
    "Provides recommendations",
    "Focuses on strategy decks",
    "Limited operating accountability",
    "Narrow functional perspective",
  ];
  const ardsaer = [
    "Designs the system",
    "Connects strategy to execution",
    "Brings operator judgment",
    "Aligns CEO, board, investor, and revenue team",
    "Builds cadence, metrics, and accountability",
  ];
  return (
    <section className="section" id="differentiation" data-screen-label="08 Differentiation" style={{ background: "var(--bone-100)" }}>
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index">07 — Difference</span>
            <span className="eyebrow">A different shape</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              Not advice in isolation.{" "}
              <em>Architecture connected to execution.</em>
            </h2>
          </div>
        </div>

        <div className="diff-stage">
          <div className="diff-col">
            <span className="diff-sub">The typical advisor</span>
            <h3>What you usually get</h3>
            <ul className="diff-list" style={{ marginTop: 28 }}>
              {typical.map((t) => (
                <li key={t}><span className="marker" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="diff-col dark">
            <span className="diff-sub">The Ardsaer model</span>
            <h3 style={{ color: "var(--bone-50)" }}>What we deliver</h3>
            <ul className="diff-list" style={{ marginTop: 28 }}>
              {ardsaer.map((t) => (
                <li key={t}><span className="marker" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- CTA ----------
function CTASection() {
  return (
    <section className="cta-section section" id="contact" data-screen-label="09 Contact">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow" style={{ marginBottom: 36, display: "inline-flex" }}>
            Begin the conversation
          </span>
          <h2 className="h2" style={{ marginTop: 18 }}>
            Let's build the revenue system behind your{" "}
            <em>next stage of growth.</em>
          </h2>
          <p className="lede" style={{ marginTop: 24, marginBottom: 36 }}>
            If your company is preparing to raise capital, scale revenue,
            professionalize GTM, or navigate a CRO transition, Ardsaer can
            help create the architecture for what comes next.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="mailto:paul@ardsaer.com" className="btn btn-primary">
              Start a Conversation
              <Icon.Arrow />
            </a>
            <a href="#framework" className="btn btn-ghost">
              Review the Framework
              <Icon.Arrow />
            </a>
          </div>
        </div>

        <aside className="cta-side">
          <span className="label-mono">Direct</span>
          <a href="mailto:paul@ardsaer.com" className="email-link">paul@ardsaer.com</a>
          <p className="cta-meta">
            Initial conversations are private, focused, and free of obligation.
            Most engagements begin with a 60-minute working session to scope
            the revenue question on the table.
          </p>
        </aside>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="logo">
              <span className="logo-mark">ARDSAER</span>
              <span className="logo-sub">Revenue Architecture</span>
            </div>
            <p className="footer-positioning">
              Revenue architecture for companies at inflection points.
            </p>
          </div>

          <div className="footer-col">
            <h5>Capabilities</h5>
            <ul>
              <li><a href="#capabilities">Revenue Architecture</a></li>
              <li><a href="#capabilities">Fractional CRO</a></li>
              <li><a href="#capabilities">Equity Raise Support</a></li>
              <li><a href="#capabilities">GTM Strategy</a></li>
              <li><a href="#capabilities">Board Advisory</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Firm</h5>
            <ul>
              <li><a href="#framework">Framework</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#engagements">Engagements</a></li>
              <li><a href="#audience">Who we help</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:paul@ardsaer.com">paul@ardsaer.com</a></li>
              <li><a href="#contact">Start a conversation</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Ardsaer LLC — All rights reserved.</span>
          <span>Founded by Paul Granito</span>
        </div>
      </div>
    </footer>
  );
}

window.Hero = Hero;
window.ProblemSection = ProblemSection;
window.CapabilitiesSection = CapabilitiesSection;
window.FrameworkSection = FrameworkSection;
window.ProofSection = ProofSection;
window.EngagementsSection = EngagementsSection;
window.AudienceSection = AudienceSection;
window.DifferentiationSection = DifferentiationSection;
window.CTASection = CTASection;
window.Footer = Footer;
