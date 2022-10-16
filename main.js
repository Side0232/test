const menuLinks = document.querySelectorAll('.menu__link')

menuLinks.forEach(e => {


    e.addEventListener('click',() => {

        menuLinks.forEach(e => {
            e.classList.remove('menu__link-active')
        })

        e.classList.add('menu__link-active')

    })

})


const accordionBox = document.querySelectorAll('.accordion__upper-content')

accordionBox.forEach(e => {

    e.addEventListener('click', () => {


        e.querySelector('.accordion_subtitle').classList.toggle('accordion_subtitle_active')
        e.querySelector('img').classList.toggle('accordion__img-active')

        e.closest('.accordion__content-box').querySelector('.accordion__down-content').classList.toggle('accordion__down-content_active')

    })

})

let menuIcon = document.querySelector(".menu__icon")

menuIcon.addEventListener('click', () =>{
    document.querySelector(".header__menu").classList.toggle('menu_mobile')
    document.querySelector(".menu__icon").classList.toggle('_active')
})

window.addEventListener("resize", () =>{
    if(document.body.clientWidth > 640) {
        document.querySelector('.header__menu').classList.remove('menu_mobile')
        document.querySelector('.menu__icon').classList.remove('_active')
    }
})


