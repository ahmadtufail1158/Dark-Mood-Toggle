const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', toggleDarkMode);

 function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

 }