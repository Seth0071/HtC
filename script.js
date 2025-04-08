const themeSwitch = document.getElementById('theme-switch');
const themeCheckbox = document.getElementById('theme-checkbox');

themeCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

