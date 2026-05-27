// ============================================================
// Ardsaer — Chatbot Widget
// ============================================================

// ---------- Q&A Database ----------
// Each intent: triggers (phrases/keywords to match) + answer in Paul's voice.
const QA = [

  // ── About Ardsaer ──────────────────────────────────────────
  {
    triggers: ['what is ardsaer','who is ardsaer','tell me about ardsaer','what does ardsaer do','describe ardsaer','about ardsaer','overview','ardsaer overview','what kind of company'],
    answer: "I founded Ardsaer as a revenue architecture firm. We help CEOs, boards, and growth-stage companies design the strategy, systems, talent model, and operating cadence required to scale predictable revenue. Think of it as building the engine that your growth ambitions actually require."
  },
  {
    triggers: ['who is paul','who is paul granito','who founded ardsaer','about paul','paul background','who runs ardsaer','paul granito','tell me about paul','founder'],
    answer: "I'm Paul Granito. I've spent 20+ years as an executive revenue leader across complex B2B markets, SaaS transformation, and recurring revenue businesses. I've scaled bookings from $250M to $1B, driven revenue growth from $50M to $500M, and led 225+ cross-functional team members. I founded Ardsaer to bring that operator experience to companies at their most critical growth moments."
  },
  {
    triggers: ['what is revenue architecture','revenue architecture meaning','explain revenue architecture','define revenue architecture'],
    answer: "Revenue architecture is the full design of your revenue system — strategy, segmentation, operating model, pipeline discipline, talent, metrics, and cadence. Most companies have pieces of this in place, but they're not connected into one coherent system. That's what I build."
  },
  {
    triggers: ['what is your mission','why did you start ardsaer','why ardsaer exist','purpose of ardsaer','why start this firm'],
    answer: "I started Ardsaer because I kept seeing the same problem: companies with real ambition but revenue systems that couldn't support the growth they were chasing. I wanted to bring genuine operator experience — not consulting distance — to those inflection moments. Architecture connected to execution, not advice in isolation."
  },
  {
    triggers: ['where is ardsaer located','where are you based','what city','location of ardsaer','where do you work from'],
    answer: "I work with clients remotely and on-site — geography isn't a constraint. Most engagements involve a mix of structured remote sessions and periodic on-site working days with the leadership team, wherever they are."
  },

  // ── Services / Capabilities ────────────────────────────────
  {
    triggers: ['what services','what do you offer','your services','your capabilities','what can you help with','offerings','all services','list of services','what are your capabilities'],
    answer: "I offer six core capabilities: Revenue Architecture, Fractional/Interim CRO, Equity Raise Support, GTM Strategy, Revenue Operating Cadence, and Board/CEO Advisory. You can engage any of them individually, or as the integrated architecture that holds them all together."
  },
  {
    triggers: ['what is gtm strategy','gtm strategy','go to market','go-to-market','market strategy','gtm'],
    answer: "GTM Strategy covers how you go to market: ICP definition, market segmentation, sales motion, channel strategy, pricing logic, and expansion paths. The goal is clarity about who you serve, why you win, and how to build repeatable pipeline — not just for today but for the next stage of growth."
  },
  {
    triggers: ['what is revenue operating cadence','operating cadence','revenue cadence','what is cadence','cadence'],
    answer: "Revenue Operating Cadence is the rhythm that drives execution — weekly, monthly, and quarterly reviews that improve accountability, forecast confidence, and team performance. Most companies have meetings but not cadence. I install the structure that makes growth decisions predictable."
  },
  {
    triggers: ['what is board advisory','board advisory','ceo advisory','advisory services','board advisor','what is ceo advisory'],
    answer: "My Board/CEO Advisory work helps leadership teams make better growth decisions by connecting strategy, execution, capital, and organizational design. I work directly with CEOs and boards to sharpen revenue visibility, improve GTM governance, and close the gap between growth ambition and operating reality."
  },
  {
    triggers: ['how many services','how many capabilities','six capabilities','six services','number of services'],
    answer: "I offer six capabilities: Revenue Architecture, Fractional/Interim CRO, Equity Raise Support, GTM Strategy, Revenue Operating Cadence, and Board/CEO Advisory. Each can be engaged on its own, but they're designed to work as a connected system."
  },

  // ── Fractional / Interim CRO ───────────────────────────────
  {
    triggers: ['what is a fractional cro','fractional cro','fractional chief revenue officer','explain fractional cro','what does fractional cro mean'],
    answer: "A Fractional CRO is senior revenue leadership on a part-time or project basis. I step in as the revenue executive your company needs — without the cost or commitment of a full-time hire. It's the right model when you need serious leadership but aren't ready to fill that seat permanently."
  },
  {
    triggers: ['what is an interim cro','interim cro','interim chief revenue officer','temporary cro','short term cro'],
    answer: "An Interim CRO steps in for transitions, turnarounds, post-raise execution, or any period where the revenue organization needs immediate senior leadership. It's similar to fractional but typically more immersive — full presence during a critical window while you hire a permanent leader or stabilize the revenue motion."
  },
  {
    triggers: ['difference between fractional and interim','fractional vs interim','fractional or interim cro','fractional versus interim'],
    answer: "Fractional is ongoing, part-time leadership — I'm embedded a set number of days per week or month. Interim is a temporary full-time role for a defined period — usually a transition or turnaround. The right model depends on the urgency and the specific gap you're filling."
  },
  {
    triggers: ['when do i need a fractional cro','do i need a fractional cro','when should i hire a fractional cro','is fractional cro right for me','do i need a cro'],
    answer: "The signal I look for: revenue has grown through founder-led sales, but the system that got you here won't scale to where you're going. You need someone to build the architecture, lead the team, and create board-level confidence — but a full-time CRO hire doesn't fit the stage or budget yet. That's the fractional moment."
  },
  {
    triggers: ['why not hire full time cro','why fractional over full time','full time vs fractional','why not just hire a cro','full-time cro vs fractional'],
    answer: "For the right stage, a full-time CRO is absolutely the right answer. But if you're pre-Series B, in a transition, or between hires, the fractional model gives you the experience and capability without the time and cost of a full search. You get the architecture built while you find the right permanent leader — or I help you hire them."
  },
  {
    triggers: ['what does a fractional cro do','cro responsibilities','what does a cro do','role of cro','cro role'],
    answer: "As Fractional CRO, I lead the revenue organization — setting strategy, managing the GTM team, running the operating cadence, owning the forecast, and representing revenue at the board and investor level. It's the full CRO function, structured to fit your stage and the time you need it."
  },
  {
    triggers: ['can you help me hire a cro','help hire a cro','find a cro','recruiting a cro','cro search'],
    answer: "I don't run executive searches, but I can play an important role in the process: defining the right profile, evaluating candidates against the actual needs of the business, and helping with onboarding. Too many CRO hires fail because the brief was wrong — I help companies get that right."
  },

  // ── The Framework ──────────────────────────────────────────
  {
    triggers: ['ardsaer framework','your framework','revenue architecture framework','what is your framework','how does your framework work','the framework','five pillars','5 pillars'],
    answer: "The Ardsaer Revenue Architecture Framework has five pillars: Market Thesis, GTM Design, Revenue System, Talent & Leadership, and Capital Readiness. Each is connected — that's the point. Most companies have one or two dialed in, but it's the alignment across all five that creates the predictable growth investors expect."
  },
  {
    triggers: ['what is market thesis','market thesis','first pillar','market focus','who you serve'],
    answer: "Market Thesis is the foundation: who we serve, why we win, and where we focus. Without a sharp market thesis, everything downstream — GTM design, talent, capital story — is built on shaky ground. I help companies get brutally honest about this before building anything else."
  },
  {
    triggers: ['what is gtm design','gtm design','second pillar','go to market design'],
    answer: "GTM Design is the operational blueprint: sales motion, channels, segmentation, pricing, and funnel architecture. It translates your market thesis into the actual mechanics of how you find, win, and expand customers."
  },
  {
    triggers: ['what is revenue system','revenue system','third pillar','pipeline system','the revenue system'],
    answer: "The Revenue System pillar covers pipeline management, forecasting, metrics, CRM discipline, and operating cadence. This is where most companies lose predictability. A well-designed revenue system is the difference between knowing what you'll close and hoping."
  },
  {
    triggers: ['what is talent and leadership','talent and leadership','fourth pillar','org design','talent pillar'],
    answer: "Talent & Leadership covers org design, roles and accountability, performance standards, and leadership rhythm. A great revenue strategy fails with the wrong team or the wrong structure. I help design the organization that can actually execute it."
  },
  {
    triggers: ['what is capital readiness','capital readiness','fifth pillar','investor readiness','ready for investors'],
    answer: "Capital Readiness is about aligning the growth story investors hear with the operating system teams execute. Investor narrative, growth model assumptions, board reporting, commercial proof points — everything that builds credible confidence in your revenue trajectory."
  },

  // ── Equity Raise / Capital ─────────────────────────────────
  {
    triggers: ['equity raise','capital raise','fundraising','help with raise','preparing for raise','equity raise support','raise capital','fundraise'],
    answer: "I help companies prepare the full commercial story for a capital raise — the growth narrative, revenue model, operating assumptions, and proof points that give investors confidence. Most companies underestimate how much the revenue story drives valuation. I make sure yours is airtight before you walk into those conversations."
  },
  {
    triggers: ['investor readiness','what does investor ready mean','investor story','how to prepare for investors','investor ready'],
    answer: "Investor readiness means your commercial story matches your operating reality — a clear growth thesis, a credible revenue model, defensible assumptions, a pipeline that supports your projections, and a team that can execute. I work with you on all of it. Not just the deck, but the underlying system."
  },
  {
    triggers: ['preparing a pitch','pitch prep','investor pitch','pitch investors','investment pitch'],
    answer: "I don't build pitch decks in isolation, but I build what makes them credible: the revenue narrative, model assumptions, growth thesis, and GTM evidence that actually move investors. When the commercial story is solid, the deck reflects the work — not a hope."
  },
  {
    triggers: ['about to raise','preparing to raise','pre raise','getting ready to raise','raising capital soon','about to fundraise'],
    answer: "Before a raise, investors will stress-test three things: your growth story, your revenue model assumptions, and whether the team can execute. I help companies tighten all three — starting with an honest assessment of where the gaps are. Reach out at paul@ardsaer.com and let's map it out."
  },
  {
    triggers: ['just raised','post raise','post-raise','just raised money','accelerate after raise','scale after raise'],
    answer: "Post-raise is about execution architecture. You now have capital — the question is whether the system can absorb it efficiently. I help newly-funded companies build the GTM infrastructure, operating cadence, and talent model that converts capital into predictable growth, not just burn."
  },
  {
    triggers: ['series a','series b','series c','what stage is this for','what company stage','company stage'],
    answer: "I typically work with growth-stage companies — Series A through Series C, and sometimes later-stage businesses going through transformation. The common thread isn't the round, it's the inflection: a critical growth challenge that's moved from operational to strategic."
  },

  // ── Who We Help / Audience ─────────────────────────────────
  {
    triggers: ['who do you work with','who is your client','what kind of companies','ideal client','do you work with startups','who do you help','target client','who are your clients'],
    answer: "I work with companies where growth has become a board-level issue. That could be a pre-raise company building investor confidence, a post-raise company accelerating execution, a PE or VC-backed business under pressure to scale, a founder-led company that's outgrown its sales motion, or a company between CROs that needs immediate leadership."
  },
  {
    triggers: ['pe backed','vc backed','private equity','venture capital','portfolio company','pe portfolio','vc portfolio'],
    answer: "Yes — PE and VC-backed companies are a core part of my work. Sponsors need revenue certainty, and I help management teams build the architecture and reporting that gives the board what they need while accelerating the business."
  },
  {
    triggers: ['founder led','founder-led','founder sales','my company is founder led','founder doing sales','founder led sales'],
    answer: "The transition from founder-led sales to a professional revenue motion is one of the most critical — and most commonly fumbled — inflection points a company faces. The motion that got you to $20M won't get you to the next $50M. I've guided a lot of CEOs through this transition and can help design what comes next."
  },
  {
    triggers: ['between cros','lost our cro','cro left','no cro','cro departed','cro transition'],
    answer: "This is one of the most common situations I step into. When a CRO departs, the revenue org needs leadership immediately. I can step in as Interim CRO to maintain momentum, stabilize the team, and — if helpful — shape the profile for the next permanent hire."
  },
  {
    triggers: ['do you work with boards','board work','board engagement','board level','boards'],
    answer: "Yes. Board advisory is one of my core engagement models. I work with boards that want sharper revenue visibility, stronger GTM governance, and a clearer connection between what leadership reports and what's actually happening in the business."
  },
  {
    triggers: ['do you work with ceos','ceo engagement','directly with ceo','working with ceo','ceo facing'],
    answer: "Almost always. CEOs are typically the primary stakeholder in my engagements — because revenue architecture connects strategy to execution, and that alignment has to start at the top. I'm comfortable in the boardroom and in the operating details."
  },
  {
    triggers: ['company hiring first cro','first cro','hiring our first cro','never had a cro','first time cro'],
    answer: "Hiring a first CRO is a pivotal moment — and one of the most common places companies get it wrong. The brief is usually too broad, the expectations unrealistic, or the system isn't ready for what they're asking the hire to walk into. I help companies prepare before the hire, which dramatically improves the outcome."
  },

  // ── Differentiation ────────────────────────────────────────
  {
    triggers: ['what makes you different','how are you different','why not a consultant','consultant vs ardsaer','different from consultants','not a consulting firm'],
    answer: "Most consultants provide recommendations and strategy decks. I design the actual system and connect it to execution. I bring operator judgment — I've sat in the CRO seat, managed teams, reported to boards, and been accountable for the number. That context shapes everything about how I work."
  },
  {
    triggers: ['why ardsaer','why choose ardsaer','why hire ardsaer','unique approach','what makes ardsaer special','why you'],
    answer: "What makes my work different is that strategy and execution aren't separate in what I deliver. I don't hand you a framework and leave. I stay in the work — aligning the CEO, board, investors, and revenue team around one connected operating model. Architecture connected to execution, not advice in isolation."
  },
  {
    triggers: ['how is ardsaer different from staffing','staffing firm','recruiting firm','executive search','headhunter'],
    answer: "I'm not a staffing or recruiting firm. I'm an operator who comes in and does the work — strategy, system design, team leadership, board communication. If hiring is part of what's needed, I can help shape the profile and evaluate candidates, but that's not the core of the engagement."
  },
  {
    triggers: ['typical advisor','what other advisors do','other advisors','typical consulting approach','strategy deck'],
    answer: "A typical advisor provides recommendations. Ardsaer designs the system. The difference is accountability and depth — I'm not writing you a report and billing by the hour. I'm building the architecture your revenue organization runs on."
  },
  {
    triggers: ['architecture not advice','advice vs architecture','connect strategy to execution','execution focused'],
    answer: "That phrase captures the core of my approach. Advice is cheap — there's no shortage of smart people who can tell you what to do. Architecture is what gets built and executed. I sit at that intersection: strategic enough to shape the vision, operational enough to make it real."
  },

  // ── Engagement Models ──────────────────────────────────────
  {
    triggers: ['engagement models','how can we work together','what types of engagements','engagement options','how do engagements work','ways to work with you'],
    answer: "I offer five engagement models: Board Advisory, Fractional CRO, Interim CRO, Equity Raise Advisory, and Strategic Projects. Each is designed around the decision you're making — not the hours on a calendar."
  },
  {
    triggers: ['what is a strategic project','strategic project','project based','one time project','specific project','focused engagement'],
    answer: "Strategic Projects are focused engagements on a specific problem — GTM redesign, sales process, forecasting, pipeline quality, org design, pricing, or board reporting. If you have a specific revenue question that needs an answer, a strategic project is often the most efficient way in."
  },
  {
    triggers: ['how long do engagements last','engagement length','duration','how long does it take','how many months','typical timeline'],
    answer: "It depends on the engagement type. Strategic projects typically run 60-90 days. Fractional CRO engagements usually run 6-12 months. Interim CRO work is designed around the transition — typically 3-6 months. Every engagement starts with a working session to scope the specific situation."
  },
  {
    triggers: ['do you work with multiple clients','other clients','how many clients do you have','capacity','how many engagements'],
    answer: "Yes, though I'm selective about it. The fractional and advisory model works because I bring concentrated experience across multiple situations. I'm careful about capacity to make sure every client gets the focus the engagement requires."
  },
  {
    triggers: ['how quickly can you start','how soon','availability','when can you start','how fast can you begin'],
    answer: "It depends on current commitments, but typically I can begin a new engagement within two to four weeks of scoping. The first step is an initial conversation — email paul@ardsaer.com and we'll figure out the timing."
  },

  // ── Getting Started / Contact ──────────────────────────────
  {
    triggers: ['how do i get started','how do we start','first step','next steps','how to begin','where do i start','what is the process'],
    answer: "The best first step is a direct conversation. Email me at paul@ardsaer.com and we'll set up a 60-minute working session to scope the revenue question you're facing. It's focused, no obligation, and you'll leave with clarity on whether and how I can help."
  },
  {
    triggers: ['what happens in the first call','first call','initial meeting','first meeting','what is the first conversation like','what do we talk about'],
    answer: "I call it a working session rather than a sales call — because it is. We focus on the specific revenue challenge in front of you: where you are, what's breaking, what you're building toward. By the end, we both have a clear sense of whether there's a fit and what engagement would make sense."
  },
  {
    triggers: ['how do i contact paul','contact information','how do i reach you','how to contact','contact paul','reach you','get in touch'],
    answer: "Best way to reach me is directly at paul@ardsaer.com. I personally respond to every inquiry — no gatekeepers, no intake forms. Just a direct conversation."
  },
  {
    triggers: ['is the first call free','free consultation','no obligation','cost of first call','is it free to talk'],
    answer: "Yes — the initial conversation is private, focused, and free of obligation. I want to understand your situation before either of us commits to anything."
  },
  {
    triggers: ['do you sign ndas','nda','non disclosure','confidentiality agreement','sign an nda','confidential'],
    answer: "Absolutely. Every engagement is fully confidential, and I'm happy to execute an NDA prior to any substantive conversation about your business."
  },
  {
    triggers: ['do you have references','references','client references','testimonials','proof of work','case studies'],
    answer: "I work on a confidential basis, so I don't publish case studies or client names. But I'm happy to provide references through a direct conversation — reach out at paul@ardsaer.com and we can arrange that."
  },

  // ── Pricing ────────────────────────────────────────────────
  {
    triggers: ['how much does it cost','what does it cost','pricing','what are your rates','fees','cost of engagement','what do you charge','how much do you charge','your fee'],
    answer: "Engagement structures vary based on scope, timeline, and the type of work involved. I don't publish standard rates because the right model depends entirely on your situation. The best way to get a sense of what's right is to start with a conversation at paul@ardsaer.com."
  },
  {
    triggers: ['do you work on retainer','retainer','monthly retainer','retainer model','monthly fee'],
    answer: "Some engagements are structured on a monthly retainer — particularly fractional CRO and ongoing board advisory work. Others are scoped as project-based. We'd nail that down in our first conversation based on what you actually need."
  },
  {
    triggers: ['do you offer equity','equity compensation','stock','equity stake','work for equity','equity based'],
    answer: "It's something that comes up, particularly in early-stage situations. It depends on the company and the engagement. Reach out to paul@ardsaer.com and we can have a candid conversation about what structure makes sense."
  },
  {
    triggers: ['is it expensive','is it affordable','can we afford','budget','is this for big companies only','cost effective'],
    answer: "The right engagement is designed around what the situation actually requires — and what creates real leverage. The cost of not having revenue architecture in place at a critical inflection point is almost always higher than the cost of building it. Reach out at paul@ardsaer.com and we can have an honest conversation about fit."
  },

  // ── Results / Proof ────────────────────────────────────────
  {
    triggers: ['what results have you achieved','results','track record','what have you done','success stories','proof of experience','what results'],
    answer: "I've scaled bookings from $250M to $1B, driven revenue growth from $50M to $500M, and led 225+ cross-functional team members across complex B2B and SaaS businesses. Twenty-plus years doing this work in the seat — not advising from the outside."
  },
  {
    triggers: ['what industries','industry experience','sectors','b2b experience','saas experience','what verticals','vertical experience'],
    answer: "My experience is concentrated in complex B2B markets and SaaS — particularly businesses with recurring revenue, multi-stakeholder sales cycles, and meaningful GTM complexity. That's the environment where revenue architecture creates the most leverage."
  },
  {
    triggers: ['have you worked with companies my size','company size','our stage','similar companies','worked with companies like mine','company like ours'],
    answer: "Probably. I've worked across early-growth through later-stage businesses — Series A through beyond. The common thread isn't size, it's the inflection: a growth challenge that's become a board-level issue. If that's where you are, reach out at paul@ardsaer.com and let's find out."
  },
  {
    triggers: ['what does success look like','how do you measure success','success metrics','outcomes','what do i get out of this','what are the results'],
    answer: "Success looks different depending on the engagement — but at a high level: your revenue is more predictable, the board has more confidence, the team is operating with more clarity, and the growth path is better defined. I measure success by the decisions it enables and the results it drives."
  },
  {
    triggers: ['do you have experience with saas','saas','software company','software business','recurring revenue company'],
    answer: "Yes — SaaS and recurring revenue businesses are a core part of my background. The complexity of multi-stakeholder B2B SaaS — pipeline management, expansion revenue, churn, net revenue retention — is where I've spent a meaningful part of my career."
  },

  // ── Problems / Inflection Points ───────────────────────────
  {
    triggers: ['what problems do you solve','what challenges do you address','common problems','what issues','what do you fix'],
    answer: "The problems I solve cluster around four inflection points: capital raise pressure where the growth story needs to match operating reality; founder-led sales that's hit its ceiling; GTM teams that are siloed rather than aligned; and boards challenging forecasts because visibility is poor. Any of those sound familiar?"
  },
  {
    triggers: ['how do i know if i need revenue architecture','do i need this','is this right for me','do i have a revenue problem','signs i need help','how do i know'],
    answer: "Some clear signals: your pipeline is less predictable than it used to be, your board is asking harder questions about growth, you've added headcount but revenue hasn't kept pace, or your current go-to-market won't get you to the next raise. If growth has become a board-level conversation, it's worth a call."
  },
  {
    triggers: ['our growth has stalled','revenue plateau','stuck','growth stalled','not growing','growth has stopped','revenue flat'],
    answer: "A revenue plateau almost always points to a structural problem — not a headcount problem. Before adding salespeople, I'd want to understand: Is the ICP still right? Is the sales motion converting? Is there a pipeline quality issue or a capacity issue? The answer shapes the fix. Reach out at paul@ardsaer.com."
  },
  {
    triggers: ["we're growing fast",'already growing','growing well','fast growth','things are going well','we are growing','revenue is growing'],
    answer: "Fast growth can mask system fragility. The companies that hit the most painful inflection points are often the ones that grew fast without architecture underneath it. If you're growing, now is exactly the right time to build the system that makes that growth durable — not after it breaks."
  },
  {
    triggers: ['revenue is unpredictable','forecasting problem','pipeline problem','bad pipeline','unpredictable revenue','revenue unpredictable','cant forecast'],
    answer: "That's exactly the problem I'm built for. Unpredictable revenue is almost always a system issue — forecasting discipline, pipeline quality, or sales motion. I'd want to understand the root cause before prescribing the fix. Email paul@ardsaer.com and let's talk through it."
  },
  {
    triggers: ['losing deals','lost deals','losing to competition','why are we losing','win rate low','low win rate','lose too many deals'],
    answer: "Lost deals are data, if you know how to read them. The causes are usually one of: ICP misalignment, positioning weakness, sales process gaps, or pricing. I help companies run a proper win/loss analysis and fix the root cause — not just add more activity."
  },
  {
    triggers: ['board is challenging us','board pressure','board asking hard questions','board questioning forecast','board wants answers','investor pressure'],
    answer: "Board pressure on revenue is usually a signal that the operating story and the investor story aren't aligned. I help leadership teams close that gap — not by managing perception, but by building the actual operating system that creates the credibility boards need."
  },

  // ── GTM / Sales ────────────────────────────────────────────
  {
    triggers: ['what is icp','ideal customer profile','icp','who should we sell to','target customer','define icp'],
    answer: "ICP — Ideal Customer Profile — is the precise definition of the customer you win most consistently, expand most reliably, and serve most profitably. Without a sharp ICP, you're spreading GTM resources across too wide a target and conversion suffers. Getting this right is often the highest-leverage move in a GTM redesign."
  },
  {
    triggers: ['sales process','how do you approach sales process','sales methodology','sales system','building a sales process'],
    answer: "A great sales process isn't a methodology religion — it's a set of repeatable steps that create predictable pipeline and consistent close rates. I design it around your buyer: their decision journey, their stakeholders, their objections. The goal is a process your team actually uses because it works."
  },
  {
    triggers: ['pipeline management','managing pipeline','pipeline review','pipeline discipline','pipeline quality'],
    answer: "Pipeline management is one of the highest-leverage levers in revenue. I install a discipline around pipeline quality — not just quantity — that makes forecasting reliable and creates honest accountability at every stage. Most companies have pipeline visibility; few have pipeline discipline."
  },
  {
    triggers: ['crm','salesforce','hubspot','crm system','crm discipline','crm usage'],
    answer: "CRM is only as good as the discipline around it. I've seen companies with Salesforce that have no more predictability than companies using spreadsheets. What matters is whether the data is trusted, maintained, and actually used to make decisions. I help build that discipline — regardless of which platform you're on."
  },
  {
    triggers: ['marketing and sales alignment','sales marketing alignment','marketing alignment','sales and marketing','aligning sales and marketing'],
    answer: "Marketing and sales misalignment is one of the most common — and expensive — GTM problems. It almost always comes down to a lack of shared definitions: ICP, qualified lead, pipeline stage, revenue attribution. I build the shared operating model that makes alignment durable."
  },
  {
    triggers: ['sdr','bdr','sales development','outbound sales','inbound','demand generation','demand gen'],
    answer: "SDR and BDR models work — when they're built on a clear ICP, tight messaging, and a handoff process that actually converts. Too often they're stood up before the motion is defined. I make sure the foundation exists before layering in pipeline generation roles."
  },
  {
    triggers: ['sales compensation','commission','comp plan','sales incentives','quota','sales comp'],
    answer: "Sales comp is strategy — not HR. The wrong comp plan will drive the wrong behavior no matter how good the rest of your GTM is. I help design plans that align individual incentives with what the business actually needs: the right customers, right deal sizes, right retention rates."
  },
  {
    triggers: ['sales team not performing','sales team performance','underperforming sales','sales team issues','sales team problem','poor sales performance'],
    answer: "Before diagnosing the team, I want to understand the system they're operating in. Poor performance is almost always the result of unclear ICP, weak process, bad comp design, or the wrong hiring profile — not effort. Fix the system first, then assess the people."
  },
  {
    triggers: ['when should i hire a vp of sales','hire vp sales','vp of sales','first sales hire','when to hire vp','vp sales hire'],
    answer: "The wrong VP of Sales hire is one of the most expensive mistakes a growth-stage company can make. The right time is when you have a repeatable sales motion to hand off — not when you're hoping the VP will create it. I help companies define what they need before they hire, which dramatically improves the outcome."
  },
  {
    triggers: ['sales org design','org design','how to structure sales team','sales team structure','structure our sales org'],
    answer: "Org design should follow the sales motion, not precede it. Too many companies build org charts before they've defined how they sell. I help design the structure that supports the motion — roles, ratios, specialization, territories, and escalation paths."
  },
  {
    triggers: ['move upmarket','enterprise','going upmarket','move to enterprise','larger deals','enterprise sales'],
    answer: "Moving upmarket is one of the most commonly underestimated GTM transitions. Everything changes: sales cycle length, stakeholder complexity, buying process, comp structure, customer success model. I've guided this transition and can help you build the architecture to support it without breaking what's already working."
  },
  {
    triggers: ['move to recurring revenue','recurring revenue','subscription model','saas transition','recurring model','subscription business'],
    answer: "The transition to recurring revenue is as much a cultural shift as a financial one. It changes how you sell, how you measure success, and how you design customer success. I've helped companies navigate this — it requires a full GTM redesign, not just a pricing change."
  },
  {
    triggers: ['international expansion','global expansion','expand internationally','new markets','international','going global'],
    answer: "International expansion amplifies whatever's broken in your domestic GTM — so I'd start with ensuring the model is solid at home before exporting it. When you're ready, the key decisions are: build vs. partner, market prioritization, and leadership on the ground. I can help structure those decisions."
  },

  // ── Forecasting / Metrics ─────────────────────────────────
  {
    triggers: ['improve forecasting','forecasting accuracy','forecast accuracy','improve forecast','forecasting problem','bad forecasting'],
    answer: "Forecasting accuracy is a lagging indicator — it improves when you fix pipeline quality, sales process discipline, and CRM hygiene upstream. I install the operating cadence and stage-gate rigor that makes forecast calls more than informed guesses."
  },
  {
    triggers: ["board doesn't trust forecast",'board challenging forecast','board questioning pipeline','board forecast credibility','board not trusting us','board not trusting numbers'],
    answer: "Board distrust of forecasts usually comes from three places: inconsistent pipeline definitions, stage inflation, or a history of missing numbers without explanation. I help build the operating model that creates forecast credibility over time — not just a better slide."
  },
  {
    triggers: ['what metrics should we track','key metrics','revenue metrics','kpis','what should we measure','what to track','important metrics'],
    answer: "The right metrics depend on your stage and model, but the fundamentals are: new ARR or bookings, pipeline coverage, conversion rates by stage, average contract value, churn/expansion, and CAC/LTV ratios. The more important question is whether your team trusts the data and uses it to make decisions."
  },
  {
    triggers: ['board reporting','revenue reporting','report to board','board metrics','board dashboard','how to report to board'],
    answer: "Great board reporting on revenue tells a story: where we are, why, and what we see ahead. It includes pipeline coverage, stage distribution, leading indicators, and a candid assessment of risk. I help design board reporting that builds confidence rather than invites skepticism."
  },
  {
    triggers: ['board meeting prep','prepare for board','board presentation','board meeting preparation','how to prepare for board'],
    answer: "Board meeting prep is part of cadence work. I help leadership teams build the review discipline that makes board meetings a conversation, not a presentation. When you have the right operating rhythm in place, the board meeting becomes the natural output — not a scramble."
  },

  // ── Revenue Culture / Leadership ───────────────────────────
  {
    triggers: ['revenue culture','sales culture','performance culture','build a culture','high performance culture'],
    answer: "Culture in a revenue organization is shaped by what you measure, what you reward, and what you tolerate. I help build the operating rhythms — reviews, 1:1s, pipeline calls, QBRs — that create accountability without micromanagement, and performance standards without culture-killing pressure."
  },
  {
    triggers: ['what does a typical week look like','typical week','what does a week look like','weekly engagement','how much time per week','weekly involvement'],
    answer: "In a typical fractional CRO week: a leadership team cadence call, individual check-ins with sales and marketing leaders, pipeline review, and strategic work on whatever initiative is in flight. The rhythm is designed around what the business needs, not a fixed schedule."
  },
  {
    triggers: ['what is a qbr','qbr','quarterly business review','quarterly review'],
    answer: "A QBR — Quarterly Business Review — is one of the operating rhythms I install. Done right, it's not a reporting exercise — it's a strategic conversation about what worked, what didn't, and what the next quarter requires. I design QBR formats that create accountability and forward momentum."
  },

  // ── Misc / Situational ─────────────────────────────────────
  {
    triggers: ['can you help with our pitch deck','pitch deck','investor deck','fundraising deck','help with deck'],
    answer: "Not pitch decks in isolation — but yes to the commercial story that makes a pitch deck credible. The revenue narrative, model assumptions, growth thesis, and GTM evidence are what actually move investors. I help build those, and the deck reflects the work."
  },
  {
    triggers: ['bad cro hire','cro hire failed','cro didnt work out','failed cro','cro transition problem'],
    answer: "This is a situation I step into frequently. After a CRO departure, the priority is stabilizing the team, assessing the state of the revenue system, and restoring momentum. I can step in as Interim CRO, sort out what happened, and help you hire more effectively the next time."
  },
  {
    triggers: ['ceo under pressure','ceo pressure','pressure from board','board pressure on ceo','ceo growth pressure'],
    answer: "When a CEO is under pressure from the board on growth, it almost always comes down to one gap: the operating story and the investor story aren't aligned. I help CEOs close that gap — not by managing the narrative, but by building the system that makes the narrative real."
  },
  {
    triggers: ['can you work remotely','remote work','work remote','do you travel','on site visits'],
    answer: "I work both remotely and on-site depending on what the engagement needs. Most strategic work happens through structured remote sessions, with periodic on-site working days with the leadership team. Geography isn't a barrier."
  },
  {
    triggers: ['hello','hi','hey','good morning','good afternoon','howdy','greetings'],
    answer: "Hi — good to have you here. I can answer questions about Ardsaer, our capabilities, how we work, or what kind of companies I work with. What's on your mind?"
  },
  {
    triggers: ['thank you','thanks','thank you so much','appreciate it','that helps'],
    answer: "Happy to help. If you want to go deeper on any of this, reach out directly at paul@ardsaer.com — I'm always up for a real conversation."
  },
  {
    triggers: ['bye','goodbye','see you','talk later','that is all'],
    answer: "Thanks for stopping by. If you ever want to talk through a specific revenue challenge, reach out at paul@ardsaer.com — I respond personally."
  },
];

// ---------- Matching Engine ----------
function matchIntent(input) {
  const text = input.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').trim();

  // 1. Check triggers for substring match
  let best = null, bestScore = 0;
  for (const intent of QA) {
    for (const trigger of intent.triggers) {
      if (text.includes(trigger)) {
        const score = trigger.length;
        if (score > bestScore) { bestScore = score; best = intent; }
      }
    }
  }
  if (best) return best.answer;

  // 2. Keyword overlap scoring
  const words = text.split(/\s+/).filter(w => w.length > 3);
  let topIntent = null, topScore = 0;
  for (const intent of QA) {
    let score = 0;
    for (const trigger of intent.triggers) {
      for (const word of words) {
        if (trigger.includes(word)) score += word.length;
      }
    }
    if (score > topScore) { topScore = score; topIntent = intent; }
  }
  if (topScore >= 6 && topIntent) return topIntent.answer;

  // 3. Fallback
  return "That's a great question — and one that probably deserves a real conversation rather than a quick answer. Reach out at paul@ardsaer.com and I'll respond personally.";
}

// ---------- Component ----------
function ChatBot() {
  const [visible, setVisible]      = React.useState(false);
  const [open, setOpen]            = React.useState(false);
  const [bubbleVisible, setBubble] = React.useState(true);
  const [mascotSrc, setMascotSrc]  = React.useState(null);
  const [input, setInput]          = React.useState('');
  const [messages, setMessages]    = React.useState([
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
      const ctx = canvas.getContext('2d');
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

  // Scroll messages to bottom
  React.useEffect(() => {
    if (open && messagesEnd.current) messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

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
    setTimeout(() => setMessages(prev => [...prev, { from: 'bot', text: matchIntent(msg) }]), 650);
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
