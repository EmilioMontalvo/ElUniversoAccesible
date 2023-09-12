const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('slider');

$('.carousel').carousel({
    interval: 0
  })

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

const contenedor = document.querySelector('.contenedor');
let isDragging = false;
let startX;

contenedor.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - contenedor.scrollLeft;
});

contenedor.addEventListener('mouseup', () => {
  isDragging = false;
});

contenedor.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const scrollX = e.clientX - startX;
  contenedor.scrollLeft = scrollX;
});

contenedor.addEventListener('mouseleave', () => {
  isDragging = false;
});
