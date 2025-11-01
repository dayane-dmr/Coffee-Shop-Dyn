const gallery = document.querySelector('.gallery');
const controls = document.querySelectorAll('.control');
const items = document.querySelectorAll('.item');

let currentItem = 0;
const maxItems = items.length;

function updateCarousel() {
    const offset = -currentItem * 100; 
    gallery.style.transform = `translateX(${offset}%)`;
}

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('left-arrow');
        if(isLeft){
            currentItem = (currentItem - 1 + maxItems) % maxItems;
        } else {
            currentItem = (currentItem + 1) % maxItems;
        }
        updateCarousel();
    });
});

updateCarousel();
