const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

const applyTheme = (theme) => {
  if (theme === "dark") {
    html.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    html.classList.remove("dark");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
};

// On page load, apply the saved theme or default to light
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isDark = html.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});
