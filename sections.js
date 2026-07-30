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
const CASE_STUDIES = {
  0: {
    title: "Determining Where to Win Before Investing Capital",
    subtitle: "A disciplined process for determining where a company can create durable competitive advantage before investing capital, talent, and commercial resources.",
    industry: "Geospatial Intelligence · Enterprise Software",
    situation: [
      "A market-leading geospatial intelligence business possessed a diverse commercial portfolio of businesses developed over many years.",
      "However, not every business leveraged the company's unique competitive advantages, core product capabilities, or supported its long-term strategic direction.",
    ],
    obstacles: [
      "Leadership faced a difficult decision: continue operating semi-profitable businesses — or focus capital, talent, engineering investment, and executive attention on markets where the company could become truly differentiated.",
    ],
    actionsIntro: "Conducted a strategic assessment of the portfolio. Evaluated:",
    actions: [
      "Market attractiveness",
      "Competitive differentiation",
      "Core capabilities",
      "Capital allocation",
      "Long-term enterprise value",
    ],
    actionsOutro: "Recommended divesting the weather and maritime services businesses because they no longer leveraged the company's unique strengths in geospatial intelligence. Executed both divestitures.",
    metrics: [
      { value: "$75M", label: "Generated through divestitures", sub: "two transactions" },
      { value: "2",    label: "Non-core businesses divested",   sub: "completed" },
    ],
    resultsIntro: null,
    results: [
      "Generated approximately $75 million through two strategic divestitures.",
      "Increased organizational focus.",
      "Improved capital allocation.",
      "Simplified product strategy.",
      "Redirected investment toward enterprise geospatial intelligence and AI-enabled platform offerings and reduced overall enterprise budget.",
    ],
    closing: null,
  },
  1: {
    title: "Transforming a Legacy Enterprise into a Platform-Based Subscription Business",
    subtitle: null,
    industry: "Geospatial Intelligence · Enterprise Software",
    situation: [
      "A market-leading geospatial intelligence business had reached a strategic inflection point. While its technology leadership remained unquestioned, its commercial model was still rooted in perpetual licensing as the market increasingly shifted toward platform-based subscription solutions. Leadership recognized that sustaining long-term growth required more than incremental improvements—it required fundamentally redesigning how the business created, delivered, and captured value.",
      "The strategic objective was to accelerate recurring revenue, improve profitability, and position the business for greater enterprise value while maintaining customer confidence and market leadership.",
    ],
    obstacles: [
      "The challenge extended well beyond introducing subscription pricing. Product strategy, sales execution, customer success, channel partnerships, marketing, and financial management all needed to be redesigned around a recurring revenue business model.",
      "Simultaneously, the organization needed to make difficult portfolio decisions, execute operational restructuring, and maintain business momentum without disrupting customer relationships or slowing innovation.",
    ],
    actionsIntro: "A comprehensive Revenue Architecture was developed to align strategy, execution, and organizational priorities around a platform-based growth model. Key initiatives included:",
    actions: [
      "Developed and launched three new enterprise products aligned with evolving customer demand and long-term platform strategy.",
      "Introduced a two-tier distribution ecosystem that expanded market reach through strategic business partners and resellers.",
      "Transitioned the commercial organization from a perpetual licensing model to a platform-based, subscription-first operating model, aligning product innovation, customer success, and commercial execution around recurring customer value.",
      "Streamlined the portfolio through the strategic divestiture of two non-core business lines, allowing greater investment in the company's highest-value capabilities.",
      "Unified product management, marketing, sales, customer success, and financial management around a disciplined commercial operating model designed to improve execution, forecasting, and scalability.",
    ],
    actionsOutro: null,
    metrics: [
      { value: "75%", label: "Signings growth",         sub: "year-over-year" },
      { value: "92%", label: "Subscription revenue",    sub: "model transition" },
      { value: "3",   label: "New enterprise products", sub: "launched" },
      { value: "2",   label: "Non-core divestitures",   sub: "completed" },
    ],
    resultsIntro: "The transformation repositioned the organization from a traditional software business to a modern platform company built for predictable, recurring growth. Business outcomes included:",
    results: [
      "Increased signings by 75% year-over-year.",
      "Transitioned the business to a 92% subscription-based revenue model.",
      "Successfully launched three new enterprise products that expanded the platform portfolio.",
      "Completed the strategic divestiture of two non-core business lines, sharpening organizational focus.",
      "Significantly reduced operating expenses while creating a more efficient, scalable organization.",
    ],
    closing: "Beyond the measurable business results, the transformation established a commercial operating model capable of delivering stronger customer lifetime value, improved forecasting discipline, increased strategic agility, and enhanced long-term enterprise value.",
  },
  2: {
    title: "Building a Revenue System That Made Growth Predictable",
    subtitle: null,
    industry: "Geospatial Intelligence · Enterprise Software",
    situation: [
      "Following the integration of multiple operating businesses, the commercial organization was managing growth through disparate sales processes, forecasting methodologies, customer success practices, and performance metrics. While individual teams were delivering results, leadership lacked a unified commercial operating system capable of consistently forecasting revenue, identifying execution risks, and scaling growth across the enterprise.",
      "The objective was to create a disciplined Revenue System that improved visibility, increased accountability, and enabled predictable, repeatable growth.",
    ],
    obstaclesIntro: "The organization faced multiple structural challenges:",
    obstaclesBullets: true,
    obstacles: [
      "Sales and Customer Success operated with different success metrics.",
      "Forecasting accuracy varied across business units and regions.",
      "Pipeline quality and inspection processes lacked consistency.",
      "Product, Marketing, Sales, and Customer Success often optimized independently rather than collectively.",
      "Leadership needed better visibility into recurring revenue performance as the business transitioned toward subscriptions.",
    ],
    actionsIntro: "Rather than focusing on individual sales initiatives, the transformation centered on building an integrated Revenue System that connected every stage of the commercial lifecycle. Key initiatives included:",
    actions: [
      "Redesigned the commercial organization to align Sales, Customer Success, Marketing, Product Management, and Business Development around shared revenue objectives.",
      "Established standardized forecasting disciplines, pipeline governance, and performance reviews to improve executive visibility and decision-making.",
      "Implemented common operating metrics across the commercial organization, improving accountability and cross-functional execution.",
      "Integrated customer acquisition, expansion, renewal, and retention into a unified recurring revenue framework.",
      "Introduced executive operating rhythms that enabled earlier identification of execution risks and more proactive resource allocation.",
    ],
    actionsOutro: null,
    metrics: [
      { value: "35%",  label: "Sales cycle reduction",   sub: "year-over-year" },
      { value: "2×",   label: "ARR per customer cohort", sub: "doubled" },
      { value: "118%", label: "Net Revenue Retention",   sub: "achieved" },
    ],
    resultsIntro: "The new Revenue System transformed commercial execution from reactive management to disciplined operational leadership. Business outcomes included:",
    results: [
      "Reduced sales cycle length by 35%.",
      "Doubled annual recurring revenue generated per customer cohort.",
      "Improved forecast accuracy, providing leadership with greater confidence in planning and capital allocation.",
      "Increased Net Revenue Retention to 118%.",
      "Created a scalable commercial operating system capable of supporting sustained enterprise growth.",
    ],
    closing: "Beyond the measurable outcomes, leadership gained something equally valuable: confidence in the business. Revenue became more predictable, execution became more transparent, and strategic decisions could be made using consistent, enterprise-wide operating data.",
  },
  3: {
    title: "Building High-Performance Commercial Organizations",
    subtitle: null,
    industry: "Geospatial Intelligence · Enterprise Software",
    situation: [
      "Following periods of rapid growth, acquisition, and organizational change, multiple commercial organizations faced a common challenge: talented people operating within fragmented structures, inconsistent leadership practices, and competing priorities. While individual teams were capable of success, the broader organization lacked the alignment, accountability, and leadership systems required to consistently outperform the market.",
      "The objective was not simply to improve sales performance — it was to build an organizational culture capable of sustaining high performance through growth, change, and transformation.",
    ],
    obstaclesIntro: null,
    obstaclesBullets: false,
    obstacles: [
      "The challenge extended beyond organizational design.",
      "Multiple leadership teams operated with different management philosophies, inconsistent performance expectations, and varying approaches to customer engagement and talent development. Organizational silos limited collaboration, succession planning was uneven, and rapid business transformation demanded new leadership capabilities across every commercial function.",
      "Creating a unified culture while simultaneously delivering aggressive business objectives required balancing accountability with trust, performance with development, and short-term execution with long-term organizational health.",
    ],
    actionsIntro: "A leadership framework was established to create organizational clarity, strengthen accountability, and develop leaders capable of sustaining long-term growth. Key initiatives included:",
    actions: [
      "Unified multiple commercial organizations under a shared vision, common operating principles, and aligned performance expectations.",
      "Redesigned organizational structures to improve collaboration across Sales, Customer Success, Marketing, Product Management, Business Development, and Channel organizations.",
      "Built leadership teams focused on coaching, succession planning, and talent development rather than transactional management.",
      "Established performance systems that rewarded accountability, collaboration, customer outcomes, and continuous improvement.",
      "Recruited, developed, and retained high-performing leaders while making difficult organizational decisions where necessary to strengthen overall performance.",
      "Fostered a culture grounded in clarity of purpose, ownership, transparency, and continuous learning.",
    ],
    actionsOutro: null,
    metrics: [],
    resultsIntro: "The organization evolved from a collection of high-performing individuals into a unified leadership team capable of consistently delivering exceptional business results. Business outcomes included:",
    results: [
      "Successfully integrated multiple commercial organizations into a single global operating model.",
      "Delivered sustained revenue growth across multiple executive leadership roles over two decades.",
      "Built leadership teams recognized for collaboration, accountability, and execution.",
      "Created stronger succession capability through intentional leadership development.",
      "Established an organizational culture capable of sustaining performance through acquisitions, restructuring, market disruption, and rapid growth.",
    ],
    closing: "Beyond the measurable business outcomes, the organization developed something more enduring: leadership capacity. Teams became more adaptable, leaders became more effective, and the business gained an organizational foundation capable of supporting future transformation.",
  },
  4: {
    title: "Positioning a Business for Long-Term Value",
    subtitle: null,
    industry: "Geospatial Intelligence · Enterprise Software",
    situation: [
      "Following the company's acquisition, the Enterprise business entered a period of strategic transformation. Leadership faced increasing pressure to sharpen strategic focus, modernize its commercial model, and strengthen financial performance. While the organization possessed industry-leading technology and market credibility, portions of the portfolio no longer aligned with its long-term competitive advantages.",
      "Leadership recognized that maximizing enterprise value would require more than revenue growth — it demanded disciplined capital allocation, sharper strategic focus, and a business model capable of attracting long-term investment.",
    ],
    obstaclesIntro: "Improving enterprise value required balancing short-term operating performance with long-term strategic positioning. The organization needed to:",
    obstaclesBullets: true,
    obstacles: [
      "Focus investment on its highest-value capabilities.",
      "Improve the quality and predictability of revenue.",
      "Reduce operating complexity without disrupting customers.",
      "Execute significant portfolio changes while maintaining business momentum.",
      "Align executive leadership, financial management, and product strategy around long-term value creation rather than short-term financial performance.",
    ],
    actionsIntro: "A comprehensive enterprise value strategy was implemented to improve the company's strategic position and strengthen its long-term investment profile. Key initiatives included:",
    actions: [
      "Conducted a strategic review of the business portfolio, identifying opportunities to concentrate investment around the organization's core competitive advantages.",
      "Successfully led the divestiture of two non-core business lines, sharpening strategic focus and generating approximately $75 million in transaction value.",
      "Accelerated the transition to a platform-based, subscription-first business model, significantly improving the predictability and quality of recurring revenue.",
      "Launched three new platform-oriented enterprise products aligned with long-term market demand.",
      "Reduced operating costs while simplifying organizational complexity and improving financial discipline.",
      "Represented the Enterprise business in Board of Directors meetings, aligning commercial strategy, financial performance, and long-term capital priorities with executive leadership.",
    ],
    actionsOutro: null,
    metrics: [
      { value: "$75M", label: "Divestiture value",    sub: "two transactions" },
      { value: "92%",  label: "Subscription revenue", sub: "model transition" },
      { value: "75%",  label: "Signings growth",      sub: "year-over-year" },
    ],
    resultsIntro: "The transformation strengthened both the operating performance and the long-term investment profile of the business. Business outcomes included:",
    results: [
      "Completed two strategic divestitures totaling approximately $75 million.",
      "Transitioned the business to a 92% subscription-based revenue model.",
      "Increased annual signings by 75% year over year.",
      "Successfully launched three new enterprise platform offerings.",
      "Significantly reduced operating expenses while improving organizational focus and scalability.",
    ],
    closing: "Beyond the measurable results, the business emerged with a clearer strategic identity, stronger recurring revenue characteristics, improved operating leverage, and a commercial operating model capable of supporting greater long-term enterprise value for shareholders.",
  },
};

function CaseStudyPanel({ cs }) {
  return (
    <div className="cs-inline-panel">
      <div className="cs-inline-header">
        <span className="cs-inline-tag">Case Study · Framework in Practice</span>
        <span className="cs-inline-industry">{cs.industry}</span>
      </div>

      <div className="cs-inline-title">{cs.title}</div>
      {cs.subtitle && <p className="cs-inline-body" style={{ fontStyle: "italic", marginBottom: "20px" }}>{cs.subtitle}</p>}

      <div className="cs-inline-two-col">
        <div>
          <span className="cs-inline-section-label">Situation</span>
          {cs.situation.map((t, i) => <p key={i} className="cs-inline-body">{t}</p>)}
        </div>
        <div>
          <span className="cs-inline-section-label">Obstacles</span>
          {cs.obstaclesIntro && <p className="cs-inline-body">{cs.obstaclesIntro}</p>}
          {cs.obstaclesBullets
            ? <ul className="cs-inline-results">{cs.obstacles.map((t, i) => <li key={i}>{t}</li>)}</ul>
            : cs.obstacles.map((t, i) => <p key={i} className="cs-inline-body">{t}</p>)
          }
        </div>
      </div>

      <div className="cs-inline-divider" />

      <span className="cs-inline-section-label">Actions</span>
      <p className="cs-inline-body">{cs.actionsIntro}</p>
      <ul className="cs-inline-results">
        {cs.actions.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
      {cs.actionsOutro && <p className="cs-inline-body" style={{ marginTop: "12px" }}>{cs.actionsOutro}</p>}

      <div className="cs-inline-divider" />

      <span className="cs-inline-section-label">Results</span>
      {cs.resultsIntro && <p className="cs-inline-body">{cs.resultsIntro}</p>}
      {cs.metrics && cs.metrics.length > 0 && (
        <div className="cs-inline-metrics" style={{ gridTemplateColumns: `repeat(${cs.metrics.length}, 1fr)` }}>
          {cs.metrics.map((m, i) => (
            <div className="cs-inline-metric" key={i}>
              <span className="cs-inline-value">{m.value}</span>
              <span className="cs-inline-label">{m.label}</span>
              <span className="cs-inline-sub">{m.sub}</span>
            </div>
          ))}
        </div>
      )}
      <ul className="cs-inline-results">
        {cs.results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
      {cs.closing && <p className="cs-inline-closing">{cs.closing}</p>}
    </div>
  );
}

function FrameworkSection() {
  const pillars = [
    { id: 0, name: "Market Thesis",        body: "Who we serve, why we win, where we focus.",                                    caseStudy: true },
    { id: 1, name: "GTM Design",           body: "Sales motion, channels, segmentation, pricing, and funnel architecture.",      caseStudy: true },
    { id: 2, name: "Revenue System",       body: "Pipeline, forecasting, metrics, CRM discipline, operating cadence.",      caseStudy: true },
    { id: 3, name: "Talent & Leadership",  body: "Org design, roles, accountability, performance standards, leadership rhythm.",  caseStudy: true },
    { id: 4, name: "Capital Readiness",    body: "Investor story, growth model, board reporting, commercial proof.",           caseStudy: true },
  ];
  const [active, setActive] = React.useState(0);
  const [expandedId, setExpandedId] = React.useState(null);

  const toggle = (id) => setExpandedId(expandedId === id ? null : id);

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
              The Ardsaer Revenue Framework: Five pillars, one connected model.
              Revenue Architecture is the discipline of designing a Revenue
              Operating System that transforms strategy into enduring enterprise value.
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
                className={"pillar " + (active === p.id ? "active" : "") + (expandedId === p.id ? " cs-open" : "")}
                key={p.id}
                onMouseEnter={() => setActive(p.id)}
                onClick={p.caseStudy ? () => toggle(p.id) : undefined}
                style={p.caseStudy ? { cursor: "pointer" } : {}}
              >
                <span className="p-num">{String(p.id + 1).padStart(2, "0")}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                    <h4>{p.name}</h4>
                    {p.caseStudy && (
                      <span className="cs-pill">{expandedId === p.id ? "↑ Close" : "Case Study →"}</span>
                    )}
                  </div>
                  <p>{p.body}</p>
                  {p.caseStudy && expandedId === p.id && CASE_STUDIES[p.id] && (
                    <CaseStudyPanel cs={CASE_STUDIES[p.id]} />
                  )}
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

// ---------- Case Study ----------
function CaseStudySection() {
  const actions = [
    "Developed and launched three new enterprise products aligned with evolving customer demand and long-term platform strategy.",
    "Introduced a two-tier distribution ecosystem that expanded market reach through strategic business partners and resellers.",
    "Transitioned the commercial organization from a perpetual licensing model to a platform-based, subscription-first operating model, aligning product innovation, customer success, and commercial execution around recurring customer value.",
    "Streamlined the portfolio through the strategic divestiture of two non-core business lines, allowing greater investment in the company's highest-value capabilities.",
    "Unified product management, marketing, sales, customer success, and financial management around a disciplined commercial operating model designed to improve execution, forecasting, and scalability.",
  ];
  const results = [
    "Increased signings by 75% year-over-year.",
    "Transitioned the business to a 92% subscription-based revenue model.",
    "Successfully launched three new enterprise products that expanded the platform portfolio.",
    "Completed the strategic divestiture of two non-core business lines, sharpening organizational focus.",
    "Significantly reduced operating expenses while creating a more efficient, scalable organization.",
  ];
  const metrics = [
    { value: "75%",  label: "Signings growth",          sub: "year-over-year" },
    { value: "92%",  label: "Subscription revenue",     sub: "model transition" },
    { value: "3",    label: "New enterprise products",  sub: "launched" },
    { value: "2",    label: "Non-core divestitures",    sub: "completed" },
  ];

  return (
    <section className="section" id="case-study" data-screen-label="05 Case Study" style={{ background: "var(--bone-100)" }}>
      <div className="container">
        <div className="section-head">
          <div className="label-col">
            <span className="index">05 — Case Study</span>
            <span className="eyebrow">Framework in Practice</span>
          </div>
          <div className="title-col">
            <h2 className="h2">
              Transforming a Legacy Enterprise into a{" "}
              <em>Platform-Based Subscription Business.</em>
            </h2>
            <p className="lede" style={{ fontSize: "13px", letterSpacing: "0.1em", fontStyle: "normal", color: "var(--slate-500)", marginTop: "-4px" }}>
              Geospatial Intelligence · Enterprise Software
            </p>
          </div>
        </div>

        <div className="cs-body">
          <div className="cs-two-col">
            <div className="cs-block">
              <span className="cs-label">Situation</span>
              <p>A market-leading geospatial intelligence business had reached a strategic inflection point. While its technology leadership remained unquestioned, its commercial model was still rooted in perpetual licensing as the market increasingly shifted toward platform-based subscription solutions. Leadership recognized that sustaining long-term growth required more than incremental improvements — it required fundamentally redesigning how the business created, delivered, and captured value.</p>
              <p>The strategic objective was to accelerate recurring revenue, improve profitability, and position the business for greater enterprise value while maintaining customer confidence and market leadership.</p>
            </div>
            <div className="cs-block">
              <span className="cs-label">Obstacles</span>
              <p>The challenge extended well beyond introducing subscription pricing. Product strategy, sales execution, customer success, channel partnerships, marketing, and financial management all needed to be redesigned around a recurring revenue business model.</p>
              <p>Simultaneously, the organization needed to make difficult portfolio decisions, execute operational restructuring, and maintain business momentum without disrupting customer relationships or slowing innovation.</p>
            </div>
          </div>

          <div className="cs-divider" />

          <div className="cs-block">
            <span className="cs-label">Actions</span>
            <p className="cs-intro">A comprehensive Revenue Architecture was developed to align strategy, execution, and organizational priorities around a platform-based growth model.</p>
            <ul className="cs-list">
              {actions.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>

          <div className="cs-divider" />

          <div className="cs-block">
            <span className="cs-label">Results</span>
            <div className="cs-metrics">
              {metrics.map((m, i) => (
                <div className="cs-metric" key={i}>
                  <span className="cs-metric-value">{m.value}</span>
                  <span className="cs-metric-label">{m.label}</span>
                  <span className="cs-metric-sub">{m.sub}</span>
                </div>
              ))}
            </div>
            <ul className="cs-list">
              {results.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <p className="cs-closing">Beyond the measurable business results, the transformation established a commercial operating model capable of delivering stronger customer lifetime value, improved forecasting discipline, increased strategic agility, and enhanced long-term enterprise value.</p>
          </div>
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
