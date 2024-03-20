document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const dots = [];
  
    let currentSlide = 0;
    let isSliding = false;
  
    function showSlide(index) {
      if (isSliding) return;
      isSliding = true;
      slider.style.transform = `translateX(-${index * 100}%)`;
      setTimeout(() => {
        isSliding = false;
      }, 300);
    }
  
    function createDots() {
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
          updateDots();
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
      dots[0].classList.add('active-dot');
    }
  
    function updateDots() {
      dots.forEach((dot, index) => {
        dot.classList.toggle('active-dot', index === currentSlide);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      updateDots();
    }
  
    function autoSlide() {
      setInterval(nextSlide, 5000); // Cambia el valor (en milisegundos) para ajustar el tiempo de cambio automático
    }
  
    createDots();
    autoSlide();
  });
  