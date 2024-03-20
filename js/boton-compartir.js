// script.js

const totalButton  = document.querySelectorAll("#boton-compartir")

totalButton.forEach(element => {
    element.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Título de la página',
                text: 'Descubre encantos de Colombia. Cultura vibrante y experiencias inolvidables. Reserva tu aventura hoy:',
                url: window.location.href
            })
            .then(() => console.log('Contenido compartido'))
            .catch((error) => console.error('Error al compartir:', error));
        } else {
            alert('La función de compartir no está soportada en este navegador.');
        }
    });
});
