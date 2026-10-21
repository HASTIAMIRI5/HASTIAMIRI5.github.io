document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.querySelector(".theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("theme-dark");
    body.classList.remove("theme-light");
    if (toggle) toggle.textContent = "☀️";
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.toggle("theme-dark");
      body.classList.toggle("theme-light", !isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggle.textContent = isDark ? "☀️" : "🌙";
    });
  }
});
