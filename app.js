// ============================================================
// Ardsaer — Main App
// ============================================================

function ScrollReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}

function wrapWithReveal(children) {
  return <div className="reveal">{children}</div>;
}

function App() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <CapabilitiesSection />
        <FrameworkSection />
        <ProofSection />
        <EngagementsSection />
        <AudienceSection />
        <DifferentiationSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollReveal />
      <ChatBot />
    </React.Fragment>
  );
}

// Auto-add .reveal to section heads + cards for nice staggered entrances
function attachReveals() {
  document.querySelectorAll(
    ".section-head, .inflection-card, .capability, .pillar, .stat, .engagement, .audience-card, .diff-col, .framework-diagram"
  ).forEach((el, i) => {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// Run after render
setTimeout(() => {
  attachReveals();
  // Trigger initial observer pass
  const els = document.querySelectorAll(".reveal:not(.in)");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }
}, 50);
