(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector(".nav");
  const yearEl = document.getElementById("year");

  /* Theme */
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) root.setAttribute("data-theme", storedTheme);

  themeToggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* Mobile nav */
  navToggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Skills */
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid && typeof SKILLS !== "undefined") {
    skillsGrid.innerHTML = SKILLS.map(
      (s) => `
      <article class="skill-card">
        <h3>${escapeHtml(s.title)}</h3>
        <ul>${s.items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      </article>`
    ).join("");
  }

  /* Experience timeline */
  const timeline = document.getElementById("timeline");
  if (timeline && typeof EXPERIENCE !== "undefined") {
    timeline.innerHTML = EXPERIENCE.map(
      (e) => `
      <li>
        <p class="role">${escapeHtml(e.role)} · ${escapeHtml(e.company)}</p>
        <p class="meta">${escapeHtml(e.period)}</p>
        <ul class="bullets">${e.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      </li>`
    ).join("");
  }

  /* Projects */
  const featuredGrid = document.getElementById("featured-projects-grid");
  const projectsGrid = document.getElementById("projects-grid");
  const filterBar = document.getElementById("filter-bar");
  let activeFilter = "all";

  const LIVE_PROJECT_ORDER = [
    "intuit-ai-governance",
    "incremental-pipelines",
    "amazon-migration",
  ];

  function projectCardHtml(p) {
    const isDraft = p.status === "draft";
    const linkLabel = isDraft ? "Case study coming soon" : "Read case study →";
    const href = isDraft ? "#" : p.href;
    const highlights =
      Array.isArray(p.highlights) && p.highlights.length
        ? `<ul class="project-highlights">${p.highlights
            .map((h) => `<li>${escapeHtml(h)}</li>`)
            .join("")}</ul>`
        : "";

    return `
        <article class="project-card${isDraft ? " coming-soon" : ""}">
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          </div>
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.summary)}</p>
          ${highlights}
          <a class="card-link" href="${escapeHtml(href)}">${linkLabel}</a>
        </article>`;
  }

  function renderFeaturedProjects() {
    if (!featuredGrid || typeof PROJECTS === "undefined") return;
    const live = PROJECTS.filter((p) => p.status === "live");
    live.sort((a, b) => {
      const ia = LIVE_PROJECT_ORDER.indexOf(a.id);
      const ib = LIVE_PROJECT_ORDER.indexOf(b.id);
      const rankA = ia === -1 ? 999 : ia;
      const rankB = ib === -1 ? 999 : ib;
      return rankA - rankB;
    });
    featuredGrid.innerHTML = live.map(projectCardHtml).join("");
  }

  function renderProjects() {
    if (!projectsGrid || typeof PROJECTS === "undefined") return;
    const drafts = PROJECTS.filter((p) => p.status === "draft");
    const filtered =
      activeFilter === "all"
        ? drafts
        : drafts.filter((p) => p.category === activeFilter);

    projectsGrid.innerHTML = filtered.map(projectCardHtml).join("");
  }

  if (filterBar && typeof PROJECT_FILTERS !== "undefined") {
    filterBar.innerHTML = PROJECT_FILTERS.map(
      (f) =>
        `<button type="button" class="filter-btn${f.id === activeFilter ? " active" : ""}" data-filter="${f.id}">${escapeHtml(f.label)}</button>`
    ).join("");

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeFilter = btn.dataset.filter;
      filterBar.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.filter === activeFilter);
      });
      renderProjects();
    });
  }

  renderFeaturedProjects();
  renderProjects();

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
