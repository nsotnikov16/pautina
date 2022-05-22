/* Спойлеры */
const spoilers = document.querySelectorAll('.spoiler')
spoilers.forEach(spoiler => {
    const click = spoiler.querySelector('.spoiler__click')
    click.addEventListener('click', () => {
        spoiler.classList.toggle('open')
    })
})