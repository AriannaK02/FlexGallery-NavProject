const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-label');
const themeIcon = document.querySelector('.theme-icon');
const savedTheme = localStorage.getItem('flex-gallery-theme');

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
  themeIcon.textContent = isDark ? '○' : '◐';
}

setTheme(savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  setTheme(isDark);
  localStorage.setItem('flex-gallery-theme', isDark ? 'dark' : 'light');
});
