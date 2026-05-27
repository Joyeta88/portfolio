/**
 * Renders Mermaid diagrams on case study pages; re-renders when theme toggles.
 */
function initCaseStudyMermaid() {
  const nodes = document.querySelectorAll(".mermaid");
  if (!nodes.length || typeof mermaid === "undefined") return;

  nodes.forEach((el) => {
    if (!el.dataset.original) {
      el.dataset.original = el.textContent.trim();
    }
  });

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function render() {
    nodes.forEach((el) => {
      el.removeAttribute("data-processed");
      el.innerHTML = el.dataset.original;
    });

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "loose",
      theme: isDark() ? "dark" : "neutral",
      themeVariables: isDark()
        ? {
            primaryColor: "#134e4a",
            primaryTextColor: "#f1f5f9",
            primaryBorderColor: "#2dd4bf",
            lineColor: "#94a3b8",
            secondaryColor: "#1e293b",
            tertiaryColor: "#0f172a",
          }
        : {
            primaryColor: "#ccfbf1",
            primaryTextColor: "#0f172a",
            primaryBorderColor: "#0d9488",
            lineColor: "#64748b",
            secondaryColor: "#f1f5f9",
            tertiaryColor: "#ffffff",
          },
      flowchart: { curve: "basis", padding: 20, htmlLabels: true },
      sequence: { mirrorActors: false },
    });

    return mermaid.run({ nodes: Array.from(nodes) });
  }

  render().catch((err) => console.warn("Mermaid render:", err));

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    setTimeout(() => {
      render().catch((err) => console.warn("Mermaid re-render:", err));
    }, 80);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCaseStudyMermaid);
} else {
  initCaseStudyMermaid();
}
