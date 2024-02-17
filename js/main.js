document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleMenu');
    var menu = document.querySelector('nav ul');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    // Ocultar el menú cuando se hace clic en un enlace
    var links = document.querySelectorAll('nav ul a');
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('show');
        });
    });

    // Ocultar el menú cuando se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!event.target.closest('nav')) {
            menu.classList.remove('show');
        }
    });

    // Evitar que el clic en el botón propague al documento
    toggleButton.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Cerrar el menú cuando se cambia el tamaño de la pantalla
    window.addEventListener('resize', function () {
        if (window.innerWidth > 500) {
            menu.classList.remove('show');
        }
    });

    

});

function cambiarImagen(nuevaImagen) {
    document.querySelector('.button img').src = nuevaImagen;
  }
  
  function restaurarImagen() {
    document.querySelector('.button img').src = 'assets/img/whatsappWhite.png';
  }
  