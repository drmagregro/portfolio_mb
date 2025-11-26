// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Fade-in animations
const elements = document.querySelectorAll("section, .project, .skill-box");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(8px)";
  el.style.transition = "0.6s";
  observer.observe(el);
});

// Dark mode
const toggleBtn = document.getElementById("theme-toggle");

function applyTheme() {
  const theme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", theme === "dark");
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  applyTheme();
});

applyTheme();

// Burger menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("active");
});
