// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme
const saved = localStorage.getItem('theme');
if (saved) {
  html.setAttribute('data-theme', saved);
}
updateIcon();

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateIcon();
});

function updateIcon() {
  const isDark = html.getAttribute('data-theme') === 'dark';
  themeToggle.textContent = isDark ? '\u2600' : '\u263E';
}

// Mobile sidebar toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    backdrop.classList.toggle('show');
  });
}

if (backdrop) {
  backdrop.addEventListener('click', () => {
    sidebar.classList.remove('open');
    backdrop.classList.remove('show');
  });
}
