// ==========================================
// PORTFOLIO SCRIPTS
// ==========================================

// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
  themeIcon.innerHTML = theme === 'dark' ? '&#9788;' : '&#9790;';
}

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.project-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Starfield Animation
function createStars() {
  const starfield = document.getElementById('starfield');
  if (!starfield) return;

  starfield.innerHTML = '';

  const starCount = 80;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = (Math.random() * 3 + 2).toFixed(2);
    const delay = (Math.random() * 3).toFixed(2);
    const size = Math.random();

    if (size > 0.8) star.classList.add('large');
    if (Math.random() > 0.85) star.classList.add('orange');

    star.style.left = x + '%';
    star.style.top = y + '%';
    star.style.setProperty('--duration', duration + 's');
    star.style.setProperty('--delay', delay + 's');

    starfield.appendChild(star);
  }
}

// Initialize stars on load
createStars();

// Recreate stars when theme changes
const originalThemeToggle = themeToggle.onclick;
themeToggle.addEventListener('click', () => {
  setTimeout(createStars, 300);
});
