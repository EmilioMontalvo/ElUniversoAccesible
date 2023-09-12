const botonAumentar = document.getElementById('botonAumentar');
const botonDisminuir = document.getElementById('botonDisminuir');
const elementosCambiados = document.querySelectorAll('.videos, .titulo_video, .parrafo, .fecha, .el-universo, .column-title, .column-text');

botonAumentar.addEventListener('click', () => {
    const computedStyle = getComputedStyle(document.documentElement);
    const textSize = parseFloat(computedStyle.getPropertyValue('--text-size'));
    document.documentElement.style.setProperty('--text-size', (textSize + 0.2) + 'rem');

    elementosCambiados.forEach((elemento) => {
        const computedStyle = getComputedStyle(elemento);
        const textSize = parseFloat(computedStyle.getPropertyValue('font-size'));
        elemento.style.fontSize = (textSize + 2) + 'px'; 
    });
});

botonDisminuir.addEventListener('click', () => {
    const computedStyle = getComputedStyle(document.documentElement);
    const textSize = parseFloat(computedStyle.getPropertyValue('--text-size'));
    document.documentElement.style.setProperty('--text-size', (textSize - 0.2) + 'rem');

    elementosCambiados.forEach((elemento) => {
        const computedStyle = getComputedStyle(elemento);
        const textSize = parseFloat(computedStyle.getPropertyValue('font-size'));
        elemento.style.fontSize = (textSize - 2) + 'px';
    });
});
