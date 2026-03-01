const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 0;
let autoPlayInterval; // Variable para guardar el temporizador

function updateCarousel() {
  const size = images[0].clientWidth; 
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Función para avanzar a la siguiente imagen
function nextSlide() {
  if (counter >= images.length - 1) {
    counter = -1;
  }
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  updateCarousel();
}

// Configurar el intervalo de 5 segundos
function startAutoPlay() {
  stopAutoPlay(); // Limpiamos cualquier intervalo previo por seguridad
  autoPlayInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Eventos de Botones
nextBtn.addEventListener('click', () => {
  nextSlide();
  startAutoPlay(); // Reinicia el tiempo al hacer clic
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    counter = images.length;
  }
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  updateCarousel();
  startAutoPlay(); // Reinicia el tiempo al hacer clic
});

window.addEventListener('resize', () => {
  carouselSlide.style.transition = "none";
  updateCarousel();
});

// Iniciar al cargar
window.onload = () => {
  updateCarousel();
  startAutoPlay();
};