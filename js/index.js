const burgerButton = document.querySelector('.burger-button')
const background = document.querySelector('.popup-background')
const burgerMenu = document.querySelector('.navigation')
const burgerCross = document.querySelector('.burger-close')
const navigationItem = document.querySelectorAll('.navigation__item')
const wrapper = document.querySelector('.wrapper')

const popup = document.querySelector('.popup')
const openPopupButton = document.querySelectorAll('.open_popup')
const popupLogin = document.querySelector('.login')
const popupCreate = document.querySelector('.create')
const popupLink = document.querySelectorAll('.popup_switch')
const loginButton = document.querySelectorAll('.login__button')
let pageWidth; 

loginButton.forEach(item => item.addEventListener('click', ()=> {
    let a = document.querySelector('.email_input').value
    let b = document.querySelector('.password_input').value
    alert('Email: ' + a + '\nPassword: ' + b);
}))

function resize() {
    pageWidth = wrapper.offsetWidth;
    if (pageWidth > 650) {
        popup.style.left = (pageWidth - 650) / 2 + 'px'
    } else {
        popup.style.left = 0 + 'px'
    }
}

window.addEventListener('resize', resize)
resize()

burgerButton.addEventListener('click', () => {
    background.classList.toggle('popup-background_active')
    burgerMenu.classList.toggle('navigation_open')
    document.body.classList.toggle('lock')

})

function closeAll() {
    background.classList.remove('popup-background_active')
    burgerMenu.classList.remove('navigation_open')
    document.body.classList.remove('lock')
    popup.classList.remove('popup_active')
    setTimeout(()=> {
        popupLogin.classList.remove('inactive')
        popupCreate.classList.add('inactive')
    }, 1000)
}

burgerCross.addEventListener('click', closeAll)
background.addEventListener('click', closeAll)
navigationItem.forEach(item => item.addEventListener('click', closeAll))


function switchPopup() {
    popupLogin.classList.toggle('inactive')
    popupCreate.classList.toggle('inactive')
}

popupLink.forEach(e => e.addEventListener('click', switchPopup))

openPopupButton.forEach(e => e.addEventListener('click', () => {
    popup.classList.toggle('popup_active')
    background.classList.toggle('popup-background_active')
}))

