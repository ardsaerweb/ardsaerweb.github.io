// ============================================================
// Ardsaer — Philosophy Section
// "The Discipline of Revenue Architecture"
// ============================================================

function PhilosophySection() {
  return (
    <React.Fragment>

      {/* ── Page header (dark) ── */}
      <section className="philosophy-header section--dark" id="philosophy">
        <div className="container philosophy-header-inner">
          <span className="eyebrow reveal">A Revenue Architecture Firm</span>
          <h2 className="display reveal" style={{ marginTop: "24px" }}>
            The Discipline of{" "}
            <em>Revenue Architecture</em>
          </h2>
          <p className="lede reveal" style={{ marginTop: "20px" }}>
            Every company reaches a point where growth becomes more complex than
            effort. This is the moment Ardsaer was built to serve.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="section section-tight" id="philosophy-body">
        <div className="container philosophy-body">

          {/* The Inflection Point */}
          <div className="philosophy-block reveal">
            <span className="label-mono" style={{ display: "block", marginBottom: "16px" }}>The Inflection Point</span>
            <p className="lede" style={{ marginBottom: "28px" }}>
              What once worked through instinct, relationships, and
              entrepreneurial drive must evolve into systems, leadership,
              accountability, and execution. Revenue becomes too important to
              leave to improvisation. Investors demand predictability. Boards
              seek visibility. Leadership teams require alignment.
            </p>

            {/* Name callout */}
            <div className="philosophy-callout reveal">
              <span className="label-mono" style={{ display: "block", marginBottom: "10px" }}>The Name</span>
              <div className="philosophy-callout-header">
                <span className="philosophy-callout-name">Ardsaer</span>
                <span className="philosophy-callout-pronunciation">pronounced ARD-sair</span>
              </div>
              <p className="philosophy-callout-text">
                Rooted in ancient Gaelic tradition, the word is commonly
                associated with the idea of a master craftsman, noble builder,
                or chief architect — someone entrusted not merely to create, but
                to design enduring structures capable of standing the test of
                time. That concept lies at the heart of everything we do.
              </p>
            </div>
          </div>

          <hr className="philosophy-rule" />

          {/* The Philosophy */}
          <div className="philosophy-block reveal">
            <span className="label-mono" style={{ display: "block", marginBottom: "16px" }}>The Philosophy</span>
            <h3 className="h2" style={{ maxWidth: "28ch", marginBottom: "24px" }}>
              Sustainable growth is rarely the result of{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-500)" }}>heroic effort.</em>{" "}
              It is the result of thoughtful architecture.
            </h3>
            <p className="body-lg reveal" style={{ marginBottom: "16px" }}>
              Just as great builders design foundations before raising walls,
              great companies require deliberate revenue systems before they can
              scale predictably. Markets, go-to-market strategy, talent,
              operating cadence, forecasting, accountability, and capital
              readiness must work together as a unified system.
            </p>
            <p className="body-lg reveal">
              This discipline is what we call{" "}
              <strong>Revenue Architecture</strong> — the intentional design of
              the structures, processes, leadership models, and operating systems
              that transform growth from an aspiration into a repeatable outcome.
            </p>
          </div>

          <hr className="philosophy-rule" />

          {/* Our Founder */}
          <div className="philosophy-block reveal">
            <span className="label-mono" style={{ display: "block", marginBottom: "16px" }}>Our Founder</span>
            <p className="body-lg reveal" style={{ marginBottom: "28px" }}>
              The philosophy was shaped through more than two decades of
              executive leadership experience across enterprise technology, SaaS
              transformation, recurring revenue businesses, and complex global
              organizations.
            </p>

            <div className="philosophy-founder reveal">
              <div className="philosophy-founder-avatar">PG</div>
              <div className="philosophy-founder-info">
                <p className="philosophy-founder-name">Paul Granito</p>
                <p className="label-mono" style={{ marginBottom: "12px" }}>Founder, Ardsaer</p>
                <p className="body-sm">
                  Over twenty years helping organizations navigate growth,
                  transformation, acquisition integration, organizational
                  redesign, and commercial scale. Paul has scaled annual
                  bookings, accelerated revenue growth, led organizations from
                  emerging teams to global operations of more than 500
                  professionals, and guided businesses through periods of
                  expansion, restructuring, and strategic change.
                </p>
              </div>
            </div>

            <blockquote className="philosophy-pullquote reveal">
              The companies that scale most effectively are not those with the
              best products or the largest budgets.{" "}
              <em>
                They are the companies with the best-designed operating systems.
              </em>
            </blockquote>

            <p className="body-lg reveal">
              They understand who they serve. They align strategy with
              execution. They create accountability. They build leadership
              capacity. They establish operating rhythms that allow performance
              to compound over time. They become{" "}
              <strong>architected for growth.</strong>
            </p>
          </div>

          <hr className="philosophy-rule" />

          {/* Who We Serve */}
          <div className="philosophy-block reveal">
            <span className="label-mono" style={{ display: "block", marginBottom: "16px" }}>Who We Serve</span>
            <p className="body-lg" style={{ marginBottom: "8px" }}>
              Today, Ardsaer partners with CEOs, boards, founders, and investors
              facing critical inflection points:
            </p>
            <ul className="philosophy-inflections">
              {[
                "Preparing for a capital raise",
                "Scaling after investment",
                "Building a professional go-to-market organization",
                "Navigating executive leadership transitions",
                "Aligning growth strategy with operational execution",
                "Creating investor-ready revenue systems",
              ].map((item) => (
                <li key={item} className="philosophy-inflection-item">{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Closing dark block ── */}
      <section className="philosophy-closing section--dark">
        <div className="container philosophy-closing-inner">
          <div className="philosophy-closing-lines reveal">
            <p className="philosophy-closing-bright">Our role is not simply to provide advice.</p>
            <p className="philosophy-closing-bright">Our role is to help design the architecture that makes growth possible.</p>
            <p className="philosophy-closing-dim">Because growth should not depend on luck.</p>
            <p className="philosophy-closing-dim">It should be built by design.</p>
          </div>
          <div className="philosophy-closing-cta reveal">
            <span className="eyebrow" style={{ marginBottom: "16px", display: "inline-flex" }}>
              Welcome to the discipline of Revenue Architecture
            </span>
            <h3 className="h2" style={{ marginBottom: "32px" }}>
              Build the revenue engine{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-400)" }}>investors expect.</em>
            </h3>
            <a href="#contact" className="btn btn-primary">
              Start a Conversation
              <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>

    </React.Fragment>
  );
}

window.PhilosophySection = PhilosophySection;
