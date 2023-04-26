const menuOpen = document.querySelector('.header__btn-burger')
const menuClose = document.querySelector('.header__btn-close')
const menu = document.querySelector('.menu')
const header = document.querySelector('.header')
// const headerAbout = document.querySelector('.header__about')

const openMenu = ()=>{
    header.classList.add('hide')
    // headerAbout.classList.add('hide')
    menu.classList.add('show')
    menu.classList.remove('hide')

}
const closeMenu = ()=>{
    header.classList.add('show')
    header.classList.remove('hide')
    // headerAbout.classList.add('show')
    // headerAbout.classList.remove('hide')
    menu.classList.add('hide')
    menu.classList.remove('show')
}
menuOpen.addEventListener('click', openMenu)
menuClose.addEventListener('click', closeMenu)