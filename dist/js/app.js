

/* Спойлеры */
const spoilers = document.querySelectorAll('.spoiler')
spoilers.forEach(spoiler => {
    const click = spoiler.querySelector('.spoiler__click')
    click.addEventListener('click', () => {
        spoiler.classList.toggle('open')
    })
})

/* Фотогаллерея */
var gallery = new Swiper(".gallery", {
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 100,
    navigation: {
        nextEl: ".gallery .swiper-button-next",
        prevEl: ".gallery .swiper-button-prev",
    },
    breakpoints: {
        1280: {
            slidesPerView: 2
        }
    }
});


/* Карточки */
var cards = new Swiper('.cards', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        1280: {
            spaceBetween: 30,
            slidesPerView: 4,
        },

        820: {
            spaceBetween: 30,
            slidesPerView: 3,
        },
        480: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        320: {
            spaceBetween: 20,
            slidesPerView: 'auto',
        }
    }
})

/* Показать все */
const btns = document.querySelectorAll('.btn_all')
btns.forEach(btn => {
    const section = btn.closest('section')
    const items = section.querySelectorAll('.services__item')

    function display(value) {
        items.forEach((item, ind) => ind > 2 ? item.style.display = value : '')
    }

    if (items.length > 3) {
        display('none')
        btn.addEventListener('click', () => {
            display('block')
            btn.remove()
        })
    } else {
        btn.remove()
    }
})

/* Позвонить на мобильнике */
const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
if (isMobile) {
    const mobileBottom = document.querySelector('.mobile')
    if (mobileBottom) {
        window.addEventListener('scroll', () => {
            const scroll = Math.ceil(window.scrollY)
            if (scroll >= 400) mobileBottom.classList.add('show')
            if (scroll < 400) mobileBottom.classList.remove('show')
        })
    }
}