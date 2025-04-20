const Thumbs = document.querySelectorAll('.imagen-tumbnail');
const MainImage = document.querySelector('.producto-imagen');

Thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        MainImage.src = thumb.src;
        MainImage.alt = thumb.alt;
    });
});
