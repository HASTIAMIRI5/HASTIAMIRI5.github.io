document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggle = document.querySelector(".theme-toggle");

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = savedTheme ? savedTheme === "dark" : true;

  body.classList.toggle("theme-dark", prefersDark);
  body.classList.toggle("theme-light", !prefersDark);

  if (toggle) {
    toggle.textContent = prefersDark ? "☀️" : "🌙";
    toggle.addEventListener("click", () => {
      const isDark = body.classList.toggle("theme-dark");
      body.classList.toggle("theme-light", !isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggle.textContent = isDark ? "☀️" : "🌙";
    });
  }
});
