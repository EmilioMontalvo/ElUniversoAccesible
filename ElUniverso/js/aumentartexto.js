const botonAumentar = document.getElementById('botonAumentar');
const botonDisminuir = document.getElementById('botonDisminuir');
const contenidoTexto = document.querySelector('.contenidoTexto');

botonAumentar.addEventListener('click', () => {
    const computedStyle = getComputedStyle(document.documentElement);
    const textSize = parseFloat(computedStyle.getPropertyValue('--text-size'));
    document.documentElement.style.setProperty('--text-size', (textSize + 0.2));
});

botonDisminuir.addEventListener('click', () => {
    const computedStyle = getComputedStyle(document.documentElement);
    const textSize = parseFloat(computedStyle.getPropertyValue('--text-size'));
    document.documentElement.style.setProperty('--text-size', (textSize - 0.2));
});
