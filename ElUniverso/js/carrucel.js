document.addEventListener('DOMContentLoaded', function () {
    // Selector para los botones "anterior" y "siguiente"
    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');

    // Escuchar el evento 'keydown' en el documento
    document.addEventListener('keydown', function (e) {
      // Si la tecla presionada es la tecla Enter (código 13)
      if (e.keyCode === 13) {
        // Si el foco está en el botón "anterior", hacer clic en él
        if (document.activeElement === prevButton) {
          prevButton.dispatchEvent(new Event('click'));
        }
        // Si el foco está en el botón "siguiente", hacer clic en él
        else if (document.activeElement === nextButton) {
          nextButton.dispatchEvent(new Event('click'));
        }
      }
    });
  });