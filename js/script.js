// Строгий режим
"use strict"

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.closest('.icon-menu')) {
        document.body.classList.toggle('menu-open');
    }
    if (targetElement.closest('[data-spoller]')) {
        const currentElement = targetElement.closest('[data-spoller]');
        if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
            currentElement.classList.toggle('active');
        }
        slideToggle(currentElement.nextElementSibling);
    }
}

const spollers = document.querySelectorAll('[data-spoller]');

if (spollers.length) {
    spollers.forEach(spoller => {
        spoller.nextElementSibling.hidden = true;
    });
}


let slideDown = (target, duration = 500) => {
    if (!target.classList.contains('--sliding')) {
        target.classList.add('--sliding');
        target.hidden = false;
        let height = target.offsetHeight;

        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;

        target.style.overflow = 'hidden';
        target.style.height = 0;

        target.offsetHeight;

        target.style.transitionProperty = `height, margin, padding`;
        target.style.transitionDuration = `${duration}ms`;

        target.style.height = `${height}px`;

        target.style.removeProperty('padding-top')
        target.style.removeProperty('padding-bottom')
        target.style.removeProperty('margin-bottom')
        target.style.removeProperty('margin-top')

        setTimeout(() => {
            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
            target.classList.remove('--sliding');
        }, duration);
    }
}
let slideUp = (target, duration = 500) => {
    if (!target.classList.contains('--sliding')) {
        target.classList.add('--sliding');
        let height = target.offsetHeight;

        target.style.transitionProperty = `height, margin, padding`;
        target.style.transitionDuration = `${duration}ms`;
        target.style.height = `${height}px`;

        target.offsetHeight;

        target.style.overflow = 'hidden';
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;

        target.style.height = 0;

        setTimeout(() => {
            target.style.removeProperty('padding-top')
            target.style.removeProperty('padding-bottom')
            target.style.removeProperty('margin-bottom')
            target.style.removeProperty('margin-top')

            target.style.removeProperty('height')
            target.style.removeProperty('overflow')
            target.style.removeProperty('transition-duration')
            target.style.removeProperty('transition-property')
            target.classList.remove('--sliding');

            target.hidden = true;
        }, duration);
    }
}
let slideToggle = (target, duration = 500) => {
    target.hidden ? slideDown(target, duration) : slideUp(target, duration)
}

// "use strict"

// document.addEventListener("click", documentActions);

// function documentActions(e) {
//     const targetElement = e.target;
//     if (targetElement.closest('.icon-menu')) {
//         document.body.classList.toggle('menu-open');
//     }

//     if (targetElement.closest('[data-spoller]')) {
//         const currentElement = targetElement.closest('[data-spoller]');
//         if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
//             currentElement.classList.toggle('active');

//         }
//         slideToggle(currentElement.nextElementSibling);

//         currentElement.classList.toggle('active');
//         currentElement.nextElementSibling.hidden = !currentElement.nextElementSibling.hidden;
//         // Це те саме,що й:
//         // if (currentElement.nextElementSibling.hidden === true) {
//         //     currentElement.nextElementSibling.hidden = false;
//         // }
//         // else {
//         //     currentElement.nextElementSibling.hidden = true;
//         // }
//     }
// }


// const spollers = document.querySelectorAll('[data-spoller]');

// if (spollers.length) {
//     spollers.forEach(spoller => {
//         spoller.nextElementSibling.hidden = true;
//     })
// }

// let slideDown = (target, duration = 500) => {
//     if (!target.classList.contains('--sliding')) {
//         target.classList.add('--sliding');
//         target.hidden = false;
//         let height = target.offsetHeight;

//         target.style.paddingTop = 0;
//         target.style.paddingBottom = 0;
//         target.style.marginTop = 0;
//         target.style.marginbottom = 0;
//         target.style.height = 0;

//         target.offsetHeight;

//         target.style.transitionProperty = `height, margin, padding`;
//         target.style.transitionDuration = `${duration}ms`;

//         target.style.height = `${height}px;`;

//         target.style.removeProperty('padding-top')
//         target.style.removeProperty('padding-bottom')
//         target.style.removeProperty('margin-top')
//         target.style.removeProperty('margin-bottom')

//     }
// }





// Sliders

const heroSlider = document.querySelector('.hero');
if (heroSlider) {
    const swiper = new Swiper('.hero', {
        // Optional parameters 
        loop: true,
        autoHeight: true,
        speed: 800,
        parallax: true,
        // If we need pagination
        pagination: {
            el: '.hero__pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.hero__arrow--next',
            prevEl: '.hero__arrow--prev',
        },


    });
}

const newSlider = document.querySelector('.new');
if (newSlider) {
    new Swiper('.new__slider', {
        // Optional parameters 
        loop: true,
        autoHeight: true,
        speed: 800,
        spaceBetween: 38,
        slidesPerView: 4,


        // Navigation arrows
        navigation: {
            prevEl: '.new__arrow--left',
            nextEl: '.new__arrow--right',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.5,
                spaceBetween: 22
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            991: {
                slidesPerView: 4,
                spaceBetween: 38
            }
        },


    });
}





















