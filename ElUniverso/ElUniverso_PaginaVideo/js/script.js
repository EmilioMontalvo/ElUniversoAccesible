const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', () => {
    toggleTheme();
});

slider.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
    }
});

slider.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        toggleTheme();
    }
});

function toggleTheme() {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
}

setTheme(localStorage.getItem('theme') || preferedColorScheme);


const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        themeToggle.checked = !themeToggle.checked; // Cambiar el estado del switch
        event.preventDefault(); // Prevenir el comportamiento por defecto
    }
});

