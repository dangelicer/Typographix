//Dark & Light Modes
const themeSwitcher = document.getElementById('theme-switcher');

function lightMode () {
    themeSwitcher.children[0].textContent = 'Light Mode';
    themeSwitcher.children[1].classList.replace('fa-moon', 'fa-sun');
}

function darkMode () {
    themeSwitcher.children[0].textContent = 'Dark Mode';
    themeSwitcher.children[1].classList.replace('fa-sun', 'fa-moon');
}

function switchTheme () {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (!currentTheme || currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

themeSwitcher.addEventListener('click', switchTheme);

if (localStorage.theme) {
    document.documentElement.setAttribute('data-theme', localStorage.theme)
    if (localStorage.theme === 'dark') {
        darkMode();
    } else {
        lightMode();
    }
}

//Nav Menu
const nav = document.getElementById('nav');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active');
}