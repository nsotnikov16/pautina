/* Спойлеры */
const spoilers = document.querySelectorAll('.spoiler')
spoilers.forEach(spoiler => {
    const click = spoiler.querySelector('.spoiler__click')
    click.addEventListener('click', () => {
        spoiler.classList.toggle('open')
    })
})

var gallery = new Swiper(".gallery", {
    slidesPerView: 4,
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 100
    
});
gallery.allowSlideNext = true
gallery.activeIndex = 2