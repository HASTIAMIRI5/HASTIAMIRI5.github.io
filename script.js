document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.querySelector(".theme-toggle");

  const applyTheme = (isDark) => {
    body.classList.toggle("theme-dark", isDark);
    body.classList.toggle("theme-light", !isDark);
    if (toggle) {
      toggle.textContent = isDark ? "☀️" : "🌙";
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    applyTheme(false);
  } else {
    applyTheme(true);
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = !body.classList.contains("theme-dark");
      applyTheme(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }
});
