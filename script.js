// Theme Toggle Script
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme")) {
    html.setAttribute("data-theme", localStorage.getItem("theme"));
}

themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

// Simple fade-in on scroll
const animatedElements = document.querySelectorAll('.animate-rise, .animate-fade, .animate-slide');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

animatedElements.forEach(el => observer.observe(el));
