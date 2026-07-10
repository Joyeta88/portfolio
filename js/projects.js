/**
 * Single source of truth for portfolio content.
 * Crowdsource bullets in data/projects-draft.md → ask Cursor to expand → paste here.
 */
const SKILLS = [
  {
    title: "Governed KPIs & executive scorecards",
    impact: "17 KPIs · 13 dimensions · one Money portfolio surface",
    items: [
      "Metric contracts and dimension playbooks before any agent or SQL ships",
      "Executive Scorecards as the leadership system of record—not ad hoc decks",
      "Finance vs product definition alignment and RCA when numbers diverge",
    ],
    tech: ["Executive Scorecards", "Metric contracts", "Semantic layer"],
  },
  {
    title: "Agentic AI with guardrails",
    impact: "30+ skills/plugins · five-phase adoption program",
    items: [
      "Contract-first Cursor/Claude workflows: skills, rules, MCP to lake & catalogs",
      "Prepare → publish → ship → connect → enable across Finance, Product, DS",
      "Deterministic metrics in control; LLMs accelerate design and validation",
    ],
    tech: ["Cursor", "Claude", "MCP", "Skills & plugins"],
  },
  {
    title: "Medallion & incremental pipelines",
    impact: "~5.5 min daily runs · <0.05% delta vs legacy (validated)",
    items: [
      "Bronze/silver/gold with MERGE ingestion, lookback, late-arriving events",
      "AI-assisted design through dual-phase validation and monitoring",
      "Funnel-grade quality: zero delta on conversion-critical steps",
    ],
    tech: ["Databricks", "Spark SQL", "MERGE", "Medallion"],
  },
  {
    title: "Enterprise BI & platform leadership",
    impact: "200+ dashboards · 500+ KPIs · 11+ partner teams",
    items: [
      "Co-architected lakehouse migration: third-party stack → first-party AWS",
      "Templates, code review, CI/CD, metric-layer rules (no KPIs from silver)",
      "Led 15+ analysts; field enablement and pipeline retirement at scale",
    ],
    tech: ["S3", "Glue", "Athena", "Redshift", "CI/CD", "Power BI"],
  },
];

const EXPERIENCE = [
  {
    company: "Intuit",
    role: "Data Analytics Lead — Money / Monetization",
    period: "2025 – Present · Lexington, MA (remote)",
    bullets: [
      "Own data foundations and AI capabilities for 6–7 monetization products (lending, refunds, banking-adjacent).",
      "Built governed KPI framework, 30+ AI skills/plugins, and stakeholder adoption program (office hours, demos).",
      "Deliver incremental pipelines, EOS variance narratives, and finance-aligned metric definitions.",
    ],
  },
  {
    company: "Amazon Pharmacy",
    role: "BI Manager, Data Foundations",
    period: "2020 – 2025 · Boston, MA",
    bullets: [
      "Led 15+ analysts; 100+ production dashboards and 500+ standardized KPIs.",
      "Snowflake/Looker → Redshift migration: 200+ dashboards, $500K+ annual savings.",
      "Forecasting (ARIMA / time series), Power BI executive reporting, field enablement.",
    ],
  },
  {
    company: "Wayfair",
    role: "Analytics Manager",
    period: "2017 – 2020 · Boston, MA",
    bullets: [
      "Performance dashboards, A/B testing, and leadership KPI cadences.",
      "Forecasting and staffing models (Erlang) for resource planning.",
    ],
  },
  {
    company: "NetApp",
    role: "Engineering Business Analyst II",
    period: "2015 – 2017 · Waltham, MA",
    bullets: [
      "Executive dashboards, statistical modeling, Tableau Server administration (1,000+ users).",
    ],
  },
];

const PROJECTS = [
  {
    id: "intuit-ai-governance",
    title: "Executive Scorecards & governed AI adoption",
    category: "intuit",
    tags: ["Executive Scorecards", "Governance", "AI Adoption"],
    summary:
      "Built a governed KPI portfolio for Money products on Executive Scorecards—contracts first, then 30+ skills/plugins and a five-phase adoption program for Finance, Product, and DS.",
    highlights: [
      "17 KPIs · 13 dimensions on Money executive scorecard",
      "30+ skills & plugins with contract-first agent workflows",
      "6–7 products under one scorecard framework",
      "Five-phase adoption: prepare → publish → ship → connect → enable",
    ],
    href: "projects/intuit-ai-governance.html",
    status: "live",
  },
  {
    id: "incremental-pipelines",
    title: "Semantic medallion pipelines (incremental)",
    category: "intuit",
    tags: ["Data Engineering", "Medallion", "AI-Assisted"],
    summary:
      "Medallion-layer journey analytics with MERGE ingestion, lookback windows, and AI-assisted design through validation monitoring.",
    highlights: [
      "~5.5 min daily runtime (was 30–60 min full reload)",
      "<0.05% max volume delta vs legacy on settled dates",
      "0 delta on conversion-critical funnel steps (validated)",
      "~125× fewer users re-aggregated per run",
    ],
    href: "projects/incremental-pipelines.html",
    status: "live",
  },
  {
    id: "amazon-migration",
    title: "Healthcare BI migration & medallion KPI platform",
    category: "amazon",
    tags: ["Medallion", "Migration", "Governance"],
    summary:
      "Co-architected Operations Data Studio: third-party stack to first-party lakehouse, bronze/silver/gold + metric layer, templates and governance for 11+ partner teams.",
    highlights: [
      "200+ dashboards migrated to governed gold & metric datasets",
      "500+ KPIs · 700+ datasets under platform standards",
      "400+ legacy pipelines retired · third-party stack sunset",
      "11+ partner teams on shared medallion + metric-layer rules",
    ],
    href: "projects/amazon-migration.html",
    status: "live",
  },
  {
    id: "conversion-rate-waterfall",
    title: "YoY conversion rate waterfall",
    category: "intuit",
    tags: ["Variance", "Waterfall", "Experimentation"],
    summary:
      "Full-season attach-rate bridge: experiment counterfactuals, bypass-path routing, Kitagawa mix—and proportional allocation that reconciles to the scorecard.",
    highlights: [
      "3 named drivers covering ~100% of observed YoY delta",
      "Experiment lift × pre-ramp counterfactual for durable UX attribution",
      "DOW-aligned weekly validation of single treatment signature",
      "Leadership waterfall + nested driver deep-dives (published EOS learnings)",
    ],
    href: "projects/conversion-rate-waterfall.html",
    status: "live",
  },
  {
    id: "ckm-metric-governance",
    title: "Finance vs product metric alignment (RCA)",
    category: "intuit",
    tags: ["Risk", "Definitions", "RCA"],
    summary:
      "Root-caused large funnel vs funding gaps as definition mismatch—not pipeline failure—and recommended parallel finance vs experience metric surfaces.",
    href: "projects/ckm-metric-governance.html",
    status: "draft",
  },
  {
    id: "daily-money-automation",
    title: "Automated finance metrics refresh",
    category: "intuit",
    tags: ["Automation", "Python", "Finance"],
    summary:
      "Python + SQL orchestration to populate daily money metrics grid—~60 seconds vs 20–30 minutes of manual copy-paste from multiple sources.",
    href: "projects/daily-money-automation.html",
    status: "draft",
  },
  {
    id: "amazon-forecasting",
    title: "Labor & demand forecasting program",
    category: "amazon",
    tags: ["Forecasting", "Power BI", "Ops"],
    summary:
      "ARIMA / time-series forecasting for capacity planning; weekly leadership readouts and ~50% automation of reporting workflows.",
    href: "projects/amazon-forecasting.html",
    status: "draft",
  },
  {
    id: "wayfair-analytics",
    title: "Distributed ops analytics & experimentation",
    category: "wayfair",
    tags: ["Tableau", "A/B Testing"],
    summary:
      "Built coaching dashboards and structured experiment readouts for operations leadership.",
    href: "projects/wayfair-analytics.html",
    status: "draft",
  },
];

const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "intuit", label: "Intuit" },
  { id: "amazon", label: "Amazon" },
  { id: "wayfair", label: "Wayfair" },
];
