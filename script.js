const sc = document.querySelector('.slider-container')
const sl = document.querySelector('.left-slide')
const sr = document.querySelector('.right-slide')
const up = document.querySelector('.up-btn')
const down = document.querySelector('.down-btn')
const slength = sr.querySelectorAll('div').length

let activeSlideIndex = 0

sl.style.top = `-${(slength - 1) * 100}vh`

up.addEventListener('click',() => changesl('up'))
down.addEventListener('click',() => changesl('down'))

const changesl = (way) =>{
    const slheight = sc.clientHeight
    if(way === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slength-1){
            activeSlideIndex=0
        }
    }else if(way === 'down'){
        activeSlideIndex--
        if(activeSlideIndex <0){
            activeSlideIndex=slength-1
        }

    }
    sr.style.transform = `translateY(-${activeSlideIndex*slheight}px)`
    sl.style.transform = `translateY(${activeSlideIndex*slheight}px)`
}