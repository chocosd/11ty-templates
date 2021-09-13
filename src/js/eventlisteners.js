const widgetWrap = document.querySelector('.widget-wrapper')
const nextArrow = document.querySelector('.arrow-next')
const prevArrow = document.querySelector('.arrow-prev')
const arrLength = Array.from(document.querySelectorAll('.home-new-feat_doc')).length
const maxScroll = 400 * (arrLength - 1);

const isStart = () => {
    if(movement === 0){
        prevArrow.classList.add('disabled') 
    } else {
        prevArrow.classList.remove('disabled') 
    }
};
const isFinished = () => {
    if(movement === maxScroll){
        nextArrow.classList.add('disabled')
    } else {
        nextArrow.classList.remove('disabled')
    }
};

let movement = 0;
if(movement === 0){ prevArrow.classList.add('disabled') }

nextArrow.addEventListener("click", (e)=>{
    if(movement < maxScroll) {
        movement += 400
        console.log(movement)
        prevArrow.classList.remove('disabled');
        widgetWrap.style.transform = `translatey(-${movement}px)`
    } else {
        nextArrow.classList.add('disabled');
        movement = 4000;
    }
    isStart();
    isFinished();
});

prevArrow.addEventListener("click", (e)=>{
    if(movement > 0) {
        movement -= 400
        console.log(movement)
        prevArrow.classList.remove('disabled');
        widgetWrap.style.transform = `translatey(-${movement}px)`
    } else {
        movement = 0;
    }
    isStart();
    isFinished();
});