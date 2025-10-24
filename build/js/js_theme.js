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


document.addEventListener('DOMContentLoaded', () => {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const icon = menuButton ? menuButton.querySelector('i') : null;

        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', () => {
                // Toggle visibility of the mobile menu
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex'); // Use flex to display items horizontally

                // Toggle Icon (Hamburger <-> X)
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-xmark');
                }
            });

            // Optional: Close menu when a link is clicked
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (mobileMenu.classList.contains('flex')) {
                        menuButton.click(); // Simulate button click to close
                    }
                });
            });
        }
    });
