
// Efecto scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Duplica los elementos para una animación continua
    const carouselItems = document.querySelector('.carousel-items');
    const clone = carouselItems.cloneNode(true);
    document.querySelector('.carousel-content').appendChild(clone);
    
    // Ajusta la animación basada en la cantidad de elementos
    const items = carouselItems.querySelectorAll('.carousel-item');
    const scrollWidth = carouselItems.scrollWidth;
    const duration = scrollWidth / 50; // Velocidad de desplazamiento
    
    // Aplica la duración de la animación dinámicamente
    const carouselElements = document.querySelectorAll('.carousel-items');
    carouselElements.forEach(element => {
        element.style.animation = `scroll ${duration}s linear infinite`;
    });
});