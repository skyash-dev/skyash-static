// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const isDarkMode = localStorage.getItem('dark') === 'true';

// Set initial theme
if (isDarkMode) {
  document.body.classList.add('theme-dark');
  themeToggle.style.backgroundColor = 'white';
} else {
  themeToggle.style.backgroundColor = '#1a0d0d';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
  const isDark = document.body.classList.contains('theme-dark');
  localStorage.setItem('dark', isDark ? 'true' : 'false');
  themeToggle.style.backgroundColor = isDark ? 'white' : '#1a0d0d';
});
