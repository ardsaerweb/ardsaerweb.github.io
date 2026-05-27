// ============================================================
// Ardsaer — Chatbot Widget
// ============================================================

function ChatBot() {
  const [visible, setVisible]         = React.useState(false);
  const [open, setOpen]               = React.useState(false);
  const [bubbleVisible, setBubble]    = React.useState(true);
  const [mascotSrc, setMascotSrc]     = React.useState(null);
  const [input, setInput]             = React.useState('');
  const [messages, setMessages]       = React.useState([
    { from: 'bot', text: "Hi! I'm here to answer questions about Ardsaer. What would you like to know?" }
  ]);
  const messagesEnd = React.useRef(null);

  // Remove green screen from mascot image using canvas
  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width  = img.width;
      canvas.height = img.height;
      const ctx  = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i], g = d[i + 1], b = d[i + 2];
        if (g > 90 && g > r * 1.35 && g > b * 1.35) d[i + 3] = 0;
      }
      ctx.putImageData(imageData, 0, 0);
      setMascotSrc(canvas.toDataURL());
    };
    img.src = 'images/mascot-v1.png';
  }, []);

  // Show after 5 s or immediately on first scroll
  React.useEffect(() => {
    let timer = setTimeout(() => setVisible(true), 5000);
    const onScroll = () => { setVisible(true); clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  // Scroll messages to bottom whenever list or panel changes
  React.useEffect(() => {
    if (open && messagesEnd.current) messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  // ---------- FAQ responses ----------
  const getResponse = (text) => {
    const t = text.toLowerCase();
    if (/what is ardsaer|who are you|tell me about|about ardsaer/.test(t))
      return "Ardsaer is a revenue architecture firm that helps CEOs, boards, and growth-stage companies design the strategy, systems, talent model, and operating cadence required to scale predictable revenue.";
    if (/service|capabilit|what do you (do|offer)|offerings/.test(t))
      return "We offer six capabilities: Revenue Architecture, Fractional/Interim CRO, Equity Raise Support, GTM Strategy, Revenue Operating Cadence, and Board/CEO Advisory — engage them individually or as one integrated system.";
    if (/fractional|interim|cro/.test(t))
      return "A Fractional CRO provides senior revenue leadership without a full-time hire — stepping in to lead the revenue organization during growth phases, transitions, or between hires.";
    if (/framework|method|approach|how does it work/.test(t))
      return "The Ardsaer Revenue Architecture Framework has five pillars: Market Thesis, GTM Design, Revenue System, Talent & Leadership, and Capital Readiness — aligning the growth story investors hear with the operating system teams actually execute.";
    if (/who do you|work with|client|right for|fit for/.test(t))
      return "Ardsaer works with pre-raise and post-raise companies, PE/VC-backed businesses, founder-led companies moving to professional GTM, companies hiring their first CRO or between CROs, and boards or CEOs under pressure to scale.";
    if (/cost|pric|how much|fee|rate/.test(t))
      return "Engagement structures vary by scope and timeline. The best first step is a direct conversation — reach out to paul@ardsaer.com to explore fit.";
    if (/contact|get started|start|connect|reach out|talk|email|meeting|conversation/.test(t))
      return "Reach out directly at paul@ardsaer.com. Most engagements begin with a 60-minute working session to scope the revenue question on the table — no obligation.";
    if (/equity|capital|raise|investor|fundrais/.test(t))
      return "Equity Raise Support prepares the growth narrative, revenue model, investor story, operating assumptions, and commercial proof points for capital conversations.";
    if (/experience|track record|result|proof|background|paul/.test(t))
      return "Paul Granito brings 20+ years of executive revenue leadership — including scaling bookings from $250M to $1B, driving revenue growth from $50M to $500M, and leading 225+ cross-functional team members.";
    if (/different|why ardsaer|why you|unique/.test(t))
      return "Most advisors provide recommendations and decks. Ardsaer designs the actual system — connecting strategy to execution, building real cadence and accountability, with operator judgment rather than outside-in analysis.";
    if (/gtm|go.to.market|sales|marketing|pipeline/.test(t))
      return "GTM Strategy covers ICP definition, market segmentation, sales motion, channel strategy, pricing logic, and expansion paths — all designed to create predictable, scalable pipeline.";
    if (/board|advisory/.test(t))
      return "Board/CEO Advisory helps leadership teams make better growth decisions by connecting strategy, execution, capital, and organizational design — giving boards the revenue clarity they need.";
    return "Good question. The best way to get a complete answer is to reach out directly at paul@ardsaer.com — Paul responds personally to explore how Ardsaer can help your specific situation.";
  };

  const suggestions = [
    "What is Ardsaer?",
    "What services do you offer?",
    "Who do you work with?",
    "How do I get started?",
  ];

  const send = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setMessages(prev => [...prev, { from: 'user', text: msg }]);
    setInput('');
    setTimeout(() => setMessages(prev => [...prev, { from: 'bot', text: getResponse(msg) }]), 650);
  };

  if (!visible) return null;

  return (
    <div className="cb-root">

      {/* ── Chat window ── */}
      {open && (
        <div className="cb-window">
          <div className="cb-header">
            <div className="cb-header-left">
              {mascotSrc && <img src={mascotSrc} className="cb-header-avatar" alt="" />}
              <div>
                <div className="cb-header-name">Ask Paul</div>
                <div className="cb-header-sub">Ardsaer Revenue Architecture</div>
              </div>
            </div>
            <button className="cb-x" onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

          <div className="cb-messages">
            {messages.map((m, i) => (
              <div key={i} className={`cb-msg cb-msg--${m.from}`}>{m.text}</div>
            ))}
            <div ref={messagesEnd} />
          </div>

          {messages.length <= 2 && (
            <div className="cb-chips">
              {suggestions.map(q => (
                <button key={q} className="cb-chip" onClick={() => send(q)}>{q}</button>
              ))}
            </div>
          )}

          <div className="cb-input-row">
            <input
              className="cb-input"
              placeholder="Ask a question…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              autoFocus
            />
            <button className="cb-send" onClick={() => send()} aria-label="Send">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Speech bubble ── */}
      {!open && bubbleVisible && (
        <div className="cb-bubble">
          <button className="cb-bubble-x" onClick={() => setBubble(false)} aria-label="Dismiss">✕</button>
          <p className="cb-bubble-text">Have a question about Ardsaer?</p>
          <button className="cb-bubble-cta" onClick={() => { setOpen(true); setBubble(false); }}>
            Ask me anything →
          </button>
        </div>
      )}

      {/* ── Mascot button ── */}
      <button
        className={`cb-mascot ${open ? 'cb-mascot--open' : ''}`}
        onClick={() => { setOpen(o => !o); setBubble(false); }}
        aria-label="Chat with Paul"
      >
        {mascotSrc
          ? <img src={mascotSrc} alt="Paul" className="cb-mascot-img" />
          : <span className="cb-mascot-fallback">P</span>
        }
      </button>

    </div>
  );
}

window.ChatBot = ChatBot;
