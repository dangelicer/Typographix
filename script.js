//Dark & Light Modes
const themeSwitcher = document.getElementById('theme-switcher');

// Update Icon
function updateThemeIcon (isDarkMode) {
    themeSwitcher.children[0].textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    themeSwitcher.children[1].classList.replace(isDarkMode ? 'fa-sun' : 'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun');
}

// Determine if dark mode is preffered
function prefersDarkMode () {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Set theme based on preferance
function setThemeOnPreference () {
    const isDarkMode = prefersDarkMode()
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon(isDarkMode);
}

function switchTheme () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme === 'dark');
}

// Check Local Storage
function initializeTheme () {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'dark')
    } else {
        setThemeOnPreference
    }
}

// Listen for theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeOnPreference)
themeSwitcher.addEventListener('click', switchTheme);

// Initialize theme when script loads
initializeTheme();

//Nav Menu ------------------------------------
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
}