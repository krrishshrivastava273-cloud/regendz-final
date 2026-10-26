export interface TemplatePageInfo {
  id: string;
  name: string;
  shortDesc: string;
  purpose: string;
  contentDesc: string;
  keyComponents: string[];
  userActions: string[];
  experienceRole: string;
}

export interface TemplateData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  designedFor: string;
  overview: string;
  keyCapabilities: string[];
  designObjectives: string[];
  serviceTag: string;
  code: string;
  pages: TemplatePageInfo[];
}

export const TEMPLATES: Record<string, TemplateData> = {
  "launch-presence": {
    slug: "launch-presence",
    title: "Launch Presence",
    tagline: "High-converting digital foundation engineered for venture-backed and seed-stage startups.",
    category: "EARLY-STAGE VENTURES · WEB DEVELOPMENT",
    designedFor: "Seed & Series-A startups, B2B SaaS platforms, and modern tech ventures launching their primary market presence.",
    overview:
      "Launch Presence is an interactive demonstration template designed to illustrate how early-stage ventures establish market positioning, validate demand, and drive rapid trial adoption through clear hierarchy and sub-millisecond edge performance.",
    keyCapabilities: [
      "Dynamic value proposition hero with interactive product simulator",
      "Modular feature showcase with performance telemetry benchmarks",
      "Interactive multi-tier pricing calculator with billing toggle",
      "Client-side validated early access onboarding and contact channels",
    ],
    designObjectives: [
      "Drive instant comprehension within the first 5 seconds of visitor landing",
      "Minimize friction in conversion funnels from hero to trial signup",
      "Provide transparent, trustworthy capability demonstrations without vaporware",
    ],
    serviceTag: "slitcode engine",
    code: "01",
    pages: [
      {
        id: "home",
        name: "Home",
        shortDesc: "Positioning hero, dynamic cloud telemetry simulator, feature matrix, and trial funnel.",
        purpose: "Introduce the fictional 'Nova AI' cloud platform, articulate its core differentiation, and capture inbound interest.",
        contentDesc: "Edge deployment telemetry, sub-millisecond benchmarks, SOC2 compliance badges, modular feature overview, and primary conversion callouts.",
        keyComponents: ["Live Telemetry Monitor", "Value Prop Grid", "Interactive Benchmark Comparison", "Frictionless CTA Ribbon"],
        userActions: ["Toggle telemetry latency nodes", "Inspect benchmark numbers", "Trigger primary trial onboarding flow"],
        experienceRole: "Serves as the high-converting storefront that turns exploratory traffic into qualified trial registrations.",
      },
      {
        id: "about",
        name: "About",
        shortDesc: "Foundational mission, architectural principles, and the engineering team concept.",
        purpose: "Build institutional credibility by articulating why Nova AI was engineered and how the infrastructure operates.",
        contentDesc: "Core origin narrative, distributed edge philosophy, security-first commitments, and fictional founding team profiles.",
        keyComponents: ["Milestone Timeline", "Architecture Tenets", "Team Grid with Capability Badges", "Global Node Map"],
        userActions: ["Read architectural rationale", "Review infrastructure standards", "Explore engineering leadership"],
        experienceRole: "Establishes long-term stability and engineering rigor for discerning technical buyers.",
      },
      {
        id: "features",
        name: "Features & Services",
        shortDesc: "In-depth breakdown of edge orchestration, serverless fallbacks, and security layers.",
        purpose: "Provide granular technical specifications that solve enterprise buyer scrutiny and architectural validation.",
        contentDesc: "Sub-millisecond routing protocols, automated failover triggers, cryptographic audit logging, and CLI integration specs.",
        keyComponents: ["Interactive Capability Selector", "CLI Code Simulator", "Security Protocol Spec Table", "Integration Badges"],
        userActions: ["Switch between feature deep-dives", "Copy sample terminal setup commands", "Inspect protocol specs"],
        experienceRole: "Transforms high-level marketing promises into verifiable, technical credibility for developers and CTOs.",
      },
      {
        id: "pricing",
        name: "Pricing",
        shortDesc: "Transparent tier matrix with monthly/annual toggle and interactive plan comparison.",
        purpose: "Eliminate pricing ambiguity with transparent tiers structured for self-serve startups up to enterprise fleets.",
        contentDesc: "Developer, Growth, and Enterprise tiers with inclusive feature checklists and illustrative cost structures.",
        keyComponents: ["Billing Cycle Toggle (Monthly / Annual -20%)", "Tier Comparison Matrix", "FAQ Accordion", "Custom Quote Trigger"],
        userActions: ["Toggle annual vs monthly discount calculations", "Compare feature entitlements", "Select preferred plan tier"],
        experienceRole: "Guides prospects cleanly toward the tier matching their operational scale without hidden friction.",
      },
      {
        id: "contact",
        name: "Contact",
        shortDesc: "Structured communication channels with live client-side validation and feedback.",
        purpose: "Provide direct inquiry pathways for enterprise procurement, custom deployments, and technical questions.",
        contentDesc: "Inquiry topic selector, response timeline commitment, regional office coordinates, and instant status notification.",
        keyComponents: ["Validated Reactive Form", "Inquiry Type Pills", "Response SLA Indicator", "Client-Side Feedback State"],
        userActions: ["Fill form with client-side error handling", "Select inquiry category", "Receive instant demo submission confirmation"],
        experienceRole: "Ensures no high-value business inquiry is lost while maintaining clear, honest demo expectations.",
      },
      {
        id: "get-started",
        name: "Get Started",
        shortDesc: "Demo self-serve onboarding portal with interactive deployment configuration.",
        purpose: "Demonstrate a low-friction workspace setup experience without collecting sensitive private data.",
        contentDesc: "Project namespace selector, region selection, and instant cluster provisioning simulation.",
        keyComponents: ["Multi-step Signup Simulator", "Region Latency Selector", "Instant Sandbox Deployment Generator"],
        userActions: ["Configure a mock cluster name", "Select target deployment region", "Generate simulated workspace token"],
        experienceRole: "Delivers immediate gratification by showing how quickly a user transitions from signup to live deployment.",
      },
    ],
  },

  "corporate-system": {
    slug: "corporate-system",
    title: "Corporate System",
    tagline: "Institutional digital architecture built for cross-border advisory, compliance, and enterprise scale.",
    category: "PROFESSIONAL SERVICES · WEB DEVELOPMENT",
    designedFor: "Corporate consultancies, institutional private equity, legal & audit practices, and multi-market enterprise firms.",
    overview:
      "Corporate System is a demonstration template modeling an institutional digital headquarters. It emphasizes clear information hierarchy, governance transparency, cross-jurisdiction advisory pillars, and executive credibility.",
    keyCapabilities: [
      "Institutional credibility architecture with audited credential blocks",
      "Multi-jurisdictional practice matrix with structured service scopes",
      "Executive governance and institutional values breakdown",
      "Demonstration career portal with structured application workflows",
    ],
    designObjectives: [
      "Convey institutional gravity and regulatory competence at first impression",
      "Organize complex multidisciplinary service portfolios into intuitive client pathways",
      "Ensure accessible, compliant contrast and typography standards across all devices",
    ],
    serviceTag: "enterprise stack",
    code: "02",
    pages: [
      {
        id: "home",
        name: "Home",
        shortDesc: "Executive introduction, institutional mandate credentials, practice pillars, and global presence.",
        purpose: "Establish Vanguard Capital Advisory as a preeminent global consultancy for institutional modernization and M&A.",
        contentDesc: "$4.8B+ illustrative portfolio AUM credentials, Tier-1 FINMA/SEC regulatory framing, and core service pillars.",
        keyComponents: ["Executive Hero Stat Block", "Three Practice Pillars", "Global Presence Node (Zurich/London/NY)", "Mandate Inquiry Trigger"],
        userActions: ["Inspect institutional credentials", "Explore core advisory practices", "Request partner consultation"],
        experienceRole: "Signals tier-one authority to board members, institutional investors, and enterprise leadership.",
      },
      {
        id: "about",
        name: "About & Governance",
        shortDesc: "Institutional origin, regulatory governance standards, and operating principles.",
        purpose: "Articulate the firm's fiduciary duties, multi-decade ethos, and ethical compliance standards.",
        contentDesc: "Founding charter, risk management oversight committee structure, ESG integration, and fiduciary guarantees.",
        keyComponents: ["Governance Matrix", "Fiduciary Principles", "Executive Committee Roster", "Annual Compliance Overview"],
        userActions: ["Review regulatory framework", "Inspect risk governance tenets", "Understand fiduciary standard"],
        experienceRole: "Validates governance credentials required by enterprise compliance officers and procurement committees.",
      },
      {
        id: "services",
        name: "Services & Delivery",
        shortDesc: "In-depth practice offerings spanning M&A advisory, risk engineering, and digital modernization.",
        purpose: "Detail how the advisory engages, structures mandates, and delivers measurable outcomes.",
        contentDesc: "Phase-by-phase advisory lifecycle: Diagnostic, Strategy Structuring, Operational Execution, and Governance Handover.",
        keyComponents: ["4-Stage Delivery Framework", "Practice Pillar Deep-Dives", "Engagement Model Comparison", "SLA Guarantees"],
        userActions: ["Explore step-by-step engagement phases", "Review mandate scope documentation", "Download mock practice brief"],
        experienceRole: "Demystifies engagement lifecycles and establishes predictable, transparent delivery timelines.",
      },
      {
        id: "industries",
        name: "Industries & Solutions",
        shortDesc: "Sector specialization matrix across private wealth, sovereign infrastructure, and advanced fintech.",
        purpose: "Demonstrate specialized cross-sector competence tailored to unique regulatory environments.",
        contentDesc: "Banking & Financial Infrastructure, Cross-Border Logistics, Healthcare Systems, and Clean Energy Capital.",
        keyComponents: ["Sector Filter Tabs", "Regulatory Environment Summary", "Solution Blueprints", "Mandate Profiles"],
        userActions: ["Filter by target industry sector", "Inspect sample mandate frameworks", "Review compliance criteria"],
        experienceRole: "Assures clients that the firm understands the specific regulatory and competitive nuances of their industry.",
      },
      {
        id: "careers",
        name: "Careers (Demo)",
        shortDesc: "Talent acquisition showcase with sample positions, values, and client-side application simulator.",
        purpose: "Showcase culture, talent density, and clear opportunities for senior advisors and technical consultants.",
        contentDesc: "Firm benefits, career progression ladders, and 3 sample open positions with interactive application modals.",
        keyComponents: ["Open Positions Filter", "Culture & Benefits Cards", "Interactive Demo Application Modal", "Recruitment Timeline"],
        userActions: ["Browse mock open roles", "Open and complete simulated job application", "Receive submission confirmation"],
        experienceRole: "Attracts top-tier international talent while illustrating a modern recruitment experience.",
      },
      {
        id: "contact",
        name: "Executive Inquiry",
        shortDesc: "Formal partner consultation request channel with multi-jurisdiction office routing.",
        purpose: "Facilitate direct executive-level engagement with the appropriate jurisdictional partner.",
        contentDesc: "Confidentiality pledge, regional office routing (Zurich, London, New York), and validated intake form.",
        keyComponents: ["Partner Consultation Form", "Regional Routing Selector", "NDA / Discretion Pledge", "Client Feedback Alert"],
        userActions: ["Select preferred global bureau", "Submit mandate criteria with field validation", "View instant mock intake confirmation"],
        experienceRole: "Provides a frictionless yet dignified entry point for enterprise-scale inquiries.",
      },
    ],
  },

  "commerce-engine": {
    slug: "commerce-engine",
    title: "Commerce Engine",
    tagline: "Headless D2C storefront built for instant catalog discovery, cart agility, and checkout velocity.",
    category: "RETAIL & D2C · WEB DEVELOPMENT",
    designedFor: "Direct-to-consumer lifestyle brands, premium hardware makers, and high-volume digital merchants.",
    overview:
      "Commerce Engine demonstrates a modern headless retail experience for 'Aura Studio'—a fictional high-craft lifestyle brand. It features live client-side cart state, instant product filtering, variant selection, and a complete simulated checkout funnel.",
    keyCapabilities: [
      "Interactive local cart state (add, remove, update quantities, real-time subtotal)",
      "Instant faceted catalog filtering by category and price sorting",
      "Full simulated checkout with order summary and generated confirmation",
      "Optimized mobile navigation and tactile micro-interactions",
    ],
    designObjectives: [
      "Eliminate page reload lag during shopping catalog browsing and cart updates",
      "Highlight premium craft aesthetics through cohesive typography and generous spacing",
      "Keep all checkout interactions entirely client-side and explicitly safe (no real payment collected)",
    ],
    serviceTag: "headless commerce",
    code: "03",
    pages: [
      {
        id: "home",
        name: "Storefront Home",
        shortDesc: "Curated seasonal drop hero, featured bestseller carousel, and craft philosophy banner.",
        purpose: "Engage visitors with the brand narrative and direct them immediately into the highest-converting products.",
        contentDesc: "Autumn Drop headline, quick-add bestseller highlights, material craft standards, and free express shipping guarantee.",
        keyComponents: ["Seasonal Hero Banner", "Bestseller Quick-View Grid", "Material Craft Principles", "Client Cart Counter"],
        userActions: ["Quick-add items to live cart", "Click through to complete catalog", "View cart drawer counter badge"],
        experienceRole: "Establishes premium brand desire while making discovery and purchase initiation effortless.",
      },
      {
        id: "catalog",
        name: "Product Listing",
        shortDesc: "Faceted collection grid with dynamic category filters, price sorting, and badge indicators.",
        purpose: "Allow shoppers to browse the entire collection with instant feedback and zero latency.",
        contentDesc: "Full inventory of 6 fictional artisanal products across Chrono, Audio, Lifestyle, and Accessories.",
        keyComponents: ["Category Filter Pills (All, Watches, Audio, Objects)", "Price Sorting Selector", "Stock & Bestseller Badges"],
        userActions: ["Filter by product category", "Sort prices ascending/descending", "Add directly to cart or open product detail"],
        experienceRole: "Provides friction-free browsing that keeps shoppers engaged and browsing deeper into the catalog.",
      },
      {
        id: "product",
        name: "Product Detail",
        shortDesc: "Comprehensive product view with variant selectors, quantity controls, and material spec sheet.",
        purpose: "Deliver complete product confidence to drive conversion for high-ticket artisanal goods.",
        contentDesc: "Kinetic Chrono 01 feature showcase: titanium casing details, sapphire glass specs, color picker, and add-to-cart.",
        keyComponents: ["Interactive Color/Finish Picker", "Quantity Increment/Decrement", "Add to Bag Button with Live State", "Technical Specs Accordion"],
        userActions: ["Select finish variant (Matte Titanium / Obsidian Black)", "Adjust quantity", "Add item and observe cart update"],
        experienceRole: "Transforms interest into purchase conviction with tactile feedback and thorough product depth.",
      },
      {
        id: "cart",
        name: "Shopping Cart",
        shortDesc: "Interactive client-side cart drawer with live quantity adjustments and shipping calculation.",
        purpose: "Empower shoppers to review their selected items, adjust quantities, and transition seamlessly to checkout.",
        contentDesc: "Itemized product list, dynamic line-item total, complimentary express shipping calculator, and checkout button.",
        keyComponents: ["Reactive Cart State Table", "Quantity Steppers", "Remove Item Button", "Order Subtotal Summary"],
        userActions: ["Increase/decrease quantities", "Remove items from cart", "Add default demo items if empty", "Proceed to demo checkout"],
        experienceRole: "Provides transparency and reassurance right before the customer commits to purchasing.",
      },
      {
        id: "checkout",
        name: "Demo Checkout",
        shortDesc: "Simulated one-page checkout with form validation and explicit demo safeguards.",
        purpose: "Demonstrate a streamlined, modern payment flow while explicitly protecting visitor privacy.",
        contentDesc: "Shipping address inputs, demo payment method selector (Demo Card / Apple Pay simulator), and final order review.",
        keyComponents: ["Express Checkout Shortcuts", "Validated Shipping Form", "Mock Card Input with 'Demo Mode' Pill", "Place Order Trigger"],
        userActions: ["Fill demo shipping fields", "Select simulated payment method", "Submit order to trigger demonstration confirmation"],
        experienceRole: "Proves that checkout friction can be minimized while demonstrating honest client-side safety.",
      },
      {
        id: "confirmation",
        name: "Order Confirmation",
        shortDesc: "Generated demonstration receipt with simulated order number, tracking timeline, and cart reset.",
        purpose: "Close the purchase loop with a satisfying confirmation screen and simulated fulfillment roadmap.",
        contentDesc: "Mock Order #AUR-89421, customer receipt breakdown, estimated delivery calendar, and return to store button.",
        keyComponents: ["Fulfillment Timeline Tracker", "Itemized Order Receipt", "Simulated Tracking Code", "Return to Catalog Button"],
        userActions: ["Review generated order details", "Click back to explore other demo products", "Reset cart demo state"],
        experienceRole: "Leaves a lingering impression of operational excellence and post-purchase customer care.",
      },
    ],
  },

  "demand-engine": {
    slug: "demand-engine",
    title: "Demand Engine",
    tagline: "Full-funnel marketing intelligence and campaign attribution platform.",
    category: "GROWTH-STAGE BRANDS · DIGITAL MARKETING",
    designedFor: "Growth marketers, performance agencies, and CMOs needing clear revenue attribution and campaign governance.",
    overview:
      "Demand Engine models a modern analytics dashboard for 'Nexus Growth Telemetry'. It visualizes cross-channel ROAS, live pacing, pipeline attribution, and includes an interactive lead management filter powered by local state.",
    keyCapabilities: [
      "Omnichannel revenue attribution with SVG pacing graphs",
      "Real-time KPI metric monitors (ROAS, Blended CAC, Pipeline, Intent)",
      "Channel-by-channel spend allocation and efficiency breakdown",
      "Interactive lead management table with live search and status filtering",
    ],
    designObjectives: [
      "Synthesize millions of data points into immediate high-signal executive decisions",
      "Provide transparent ROI attribution connecting creative ad spend to closed revenue",
      "Maintain strict visual hierarchy with restrained lime accents and dark mode ergonomics",
    ],
    serviceTag: "growth analytics",
    code: "04",
    pages: [
      {
        id: "overview",
        name: "Campaign Overview",
        shortDesc: "Live executive telemetry dashboard with blended ROAS, pacing charts, and active alerts.",
        purpose: "Give growth leaders an instant pulse on blended marketing efficiency and quarterly budget pacing.",
        contentDesc: "Blended ROAS (4.62x), Qualified Pipeline ($842.6K), pacing forecast (+32% Q4), and real-time campaign health indicators.",
        keyComponents: ["High-Signal KPI Quad", "Attribution Line Graph with Area Glow", "Channel Contribution Bar", "Pacing Status Chips"],
        userActions: ["Inspect time window metrics", "Read revenue attribution trends", "Monitor high-velocity alerts"],
        experienceRole: "Serves as the high-level command center where CMOs start and conclude their daily operational review.",
      },
      {
        id: "campaigns",
        name: "Campaign Details",
        shortDesc: "Granular breakdown of active campaigns, target ROAS thresholds, and live budget pacing.",
        purpose: "Enable performance marketers to audit individual campaign setups, spend velocity, and optimization flags.",
        contentDesc: "Meta Retargeting Pro, Google Search Brand, TikTok Top-of-Funnel, and LinkedIn Enterprise account-based plays.",
        keyComponents: ["Campaign Status Table", "Budget Utilization Meters", "ROAS Benchmark Indicators", "Status Toggle Simulator"],
        userActions: ["Review campaign status (Active / Optimized)", "Compare allocated spend vs revenue generated", "Inspect channel levers"],
        experienceRole: "Bridges macro executive strategy with micro campaign management for media buyers and growth leads.",
      },
      {
        id: "audience",
        name: "Audience Insights",
        shortDesc: "Cohort segmentation, geographic concentration, and high-intent buyer behavior telemetry.",
        purpose: "Reveal who is converting, which personas exhibit the shortest sales cycles, and where market expansion lies.",
        contentDesc: "Enterprise Tech Buyers (42%), Seed Founders (31%), Agency Partners (27%), plus geographic conversion rates.",
        keyComponents: ["Persona Breakdown Rings", "Geographic Intent Map Summary", "Conversion Velocity Index", "Cohort Retention Table"],
        userActions: ["Compare audience segment performance", "Inspect geographic acquisition density", "Analyze persona lifetime value"],
        experienceRole: "Guides creative and messaging strategy with concrete behavioral cohort telemetry.",
      },
      {
        id: "channels",
        name: "Channel Performance",
        shortDesc: "Side-by-side attribution matrix contrasting Meta, Google Search, LinkedIn, and Direct traffic.",
        purpose: "Expose channel efficiency to guide aggressive budget reallocation toward highest-yield platforms.",
        contentDesc: "Channel CAC, conversion rate per dollar, attribution share, and creative fatigue markers.",
        keyComponents: ["Cross-Channel Attribution Matrix", "CAC Efficiency Bars", "Creative Saturation Alerts", "Reallocation Simulator"],
        userActions: ["Analyze cost-per-acquisition across platforms", "Spot creative fatigue warnings", "Review blended attribution model"],
        experienceRole: "Ensures media spend is rigorously allocated to channels generating authentic revenue rather than vanity metrics.",
      },
      {
        id: "reports",
        name: "Executive Reports",
        shortDesc: "Exportable monthly performance brief summarizing growth velocity and strategic recommendations.",
        purpose: "Deliver board-ready summaries that translate marketing jargon into bottom-line EBITDA impact.",
        contentDesc: "Executive narrative, key wins, headwinds, forecasted Q4 trajectory, and automated report download trigger.",
        keyComponents: ["Executive Narrative Block", "Quarterly Benchmark Table", "Strategic Next Steps List", "Simulated PDF Export Button"],
        userActions: ["Review executive growth summary", "Read strategic optimization takeaways", "Trigger mock report download action"],
        experienceRole: "Equips growth leaders to demonstrate marketing ROI to founders, investors, and executive boards.",
      },
      {
        id: "leads",
        name: "Lead Management Demo",
        shortDesc: "Interactive CRM pipeline demo with working search, status filtering, and intent score badges.",
        purpose: "Demonstrate closed-loop feedback between front-end ad clicks and bottom-of-funnel sales qualification.",
        contentDesc: "Live searchable table of 6 fictional qualified leads with company names, deal sizes, channels, and statuses.",
        keyComponents: ["Real-time Search Filter Input", "Status Filter Dropdown (All, Qualified, Meeting, Closed)", "Interactive Lead Drawer"],
        userActions: ["Type to search leads by name or company", "Filter by pipeline stage", "Click to inspect lead attribution history"],
        experienceRole: "Proves that top-of-funnel marketing connects directly to qualified sales pipeline and enterprise revenue.",
      },
    ],
  },
};
