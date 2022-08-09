const sliderLine = document.querySelector('.slider-line')
const slide = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.slider-right__button')
const rightBtn = document.querySelector('.slider-left__button')
const image = document.querySelectorAll('.slide__image')
const container = document.querySelector('.wrapper')
let sliderRadio = document.querySelector('.slider-radio')
let width;
let collection = sliderRadio.children
let count = 1;



leftBtn.onclick = left
rightBtn.onclick = right

function init() {
    width = container.offsetWidth;
    // console.log(width);
    if(width > 800) {
        image.forEach(i => i.style.width = width / 100 * 55.56 + 'px')
        image.forEach(i => i.style.height = width / 100 * 55.56 + 'px')
        sliderLine.style.left = (((width / 100 * 59.25) * 1.5)* -1) + -120 + 'px'
    } else {
        image.forEach(i => i.style.width = width - 30 + 'px')
        image.forEach(i => i.style.height = (width * 0.5385) + 'px')
        sliderLine.style.left = -width * 2 + 'px'
    }
    
}

window.addEventListener('resize', init)

init()

function left() {
    count++
    check()
    radioColor()
    leftBtn.onclick = null;
    rightBtn.onclick = null
    sliderLine.style.transform = width > 800 ? 'translateX(-16.85%)' : 'translateX(-16.7%)'
    setTimeout(()=> {
        let slideList = document.querySelectorAll('.slide')
        sliderLine.appendChild(slideList[0])
        sliderLine.style.transition = 'none'
        sliderLine.style.transform = 'translateX(0px)'
        leftBtn.onclick = left
        rightBtn.onclick = right
    }, 1000)
    sliderLine.style.transition = 'all ' + 'ease ' + 1+'s'
}

function right() {
    count--
    check()
    radioColor()
    leftBtn.onclick = null
    rightBtn.onclick = null
    sliderLine.style.transform = width > 800 ? 'translateX(16.85%)' : 'translateX(16.7%)'
    setTimeout(()=> {
        let slideList = document.querySelectorAll('.slide')
        sliderLine.style.transition = 'none'
        sliderLine.style.transform = 'translateX(0px)'
        sliderLine.prepend(slideList[slideList.length - 1])
        leftBtn.onclick = left
        rightBtn.onclick = right
    }, 1000)
    sliderLine.style.transition = 'all ' + 'ease ' + 1+'s'
}




radioColor()

function radioColor() {
    for(let i = 0; i < collection.length; i++) {
        if(i == count) {
            collection[i].style.background = '#F2785C'
        } else {
            collection[i].style.background = 'rgba(242, 120, 92, 0.5)'
        }
    }
    // console.log(count);
}

function check() {
    count == 3 ? count = 0 : count = count
    count == -1 ? count = 2 : count = count
}