<script>
  // Esperar a que la página termine de cargar
  window.addEventListener('load', function() {
    // Verificar si la URL actual contiene la cadena de confirmación
    if (window.location.href.includes('https://formsubmit.co/form/submission')) {
      // Redirigir a WhatsApp
      window.location.href = 'https://api.whatsapp.com/send?phone=+573127749874';
    }
  });
</script>
