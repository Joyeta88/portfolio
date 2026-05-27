/**
 * Single source of truth for portfolio content.
 * Crowdsource bullets in data/projects-draft.md → ask Cursor to expand → paste here.
 */
const SKILLS = [
  {
    title: "Agentic AI & Copilots",
    items: [
      "LLM workflows (Claude, Cursor) with skills, rules, and plugins",
      "MCP integrations to lake, dictionaries, and dashboards",
      "Governance-first adoption and stakeholder enablement",
    ],
  },
  {
    title: "Data Engineering",
    items: [
      "Incremental pipelines & medallion-style layering",
      "Databricks, Spark SQL, orchestration (Glue-class tools)",
      "Fact/dimension modeling, semantic metrics, data quality",
    ],
  },
  {
    title: "Analytics & BI",
    items: [
      "Power BI, Tableau, Looker, QuickSight",
      "Variance analysis, waterfalls, Kitagawa decomposition",
      "Executive dashboards and KPI governance",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Cross-functional partnership (Finance, Product, Risk, DS)",
      "Team mentoring and analytics operating models",
      "Forecasting, experimentation, ROI framing",
    ],
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
    title: "Governed ECC Money KPIs & AI enablement",
    category: "intuit",
    tags: ["ECC", "AI Governance", "Skills"],
    summary:
      "Standardized Money executive scorecard on ECC (17 KPIs, 13 dimensions) and shipped 30+ skills/plugins so Finance, Product, and DS share one governed definition of truth.",
    highlights: [
      "17 KPIs · 13 dimensions on Money ECC scorecard",
      "30+ agent skills & plugins (pipelines, scorecard trace, SQL orchestrator)",
      "6–7 monetization products under one KPI framework",
      "MCP-connected copilots + office hours adoption program",
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
    id: "eos-waterfall-5de",
    title: "End-of-season variance & waterfall ROI",
    category: "intuit",
    tags: ["Finance", "Variance", "Waterfall"],
    summary:
      "Full-season YoY attach-rate decomposition: Kitagawa mix/rate effects, experiment-linked drivers, and leadership-ready waterfall narrative.",
    href: "projects/eos-waterfall-5de.html",
    status: "draft",
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
    id: "amazon-migration",
    title: "Enterprise BI migration & KPI SO T",
    category: "amazon",
    tags: ["Redshift", "Migration", "Leadership"],
    summary:
      "Led Snowflake/Looker to Redshift transition: 200+ dashboards, 700+ datasets, 400+ ETL retirements, and governed KPI definitions across 11+ partner teams.",
    href: "projects/amazon-migration.html",
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
