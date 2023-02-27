const arrLeft = document.querySelector('.slider__btn_left');
const arrRight = document.querySelector('.slider__btn_right');
const slides = document.querySelectorAll('.slider__img');
const activeSlideNumber = document.querySelector('.slider__number');

let slideNumber;

function initVisibleSlide(arrSlides, n) {
    for (let i = 0; i < arrSlides.length; i++) {
        arrSlides[i].classList.remove('slider__img_visible');
    }
    slideNumber = n;
    arrSlides[slideNumber].classList.add('slider__img_visible');
}

function slideRight(arrSlides) {
    slideNumber += 1;
    if (slideNumber >= arrSlides.length) {
        arrSlides[slideNumber - 1].classList.remove('slider__img_visible');
        slideNumber = 0;
        arrSlides[slideNumber].classList.add('slider__img_visible');
    } else {
        arrSlides[slideNumber - 1].classList.remove('slider__img_visible');
        arrSlides[slideNumber].classList.add('slider__img_visible');
    }
}

function slideLeft(arrSlides) {
    if (slideNumber <= 0) {
        arrSlides[slideNumber].classList.remove('slider__img_visible');
        slideNumber = arrSlides.length - 1;
        arrSlides[slideNumber].classList.add('slider__img_visible');
    } else {
        arrSlides[slideNumber].classList.remove('slider__img_visible');
        slideNumber -= 1;
        arrSlides[slideNumber].classList.add('slider__img_visible');
    }
}

function setActiveSlideNumber(n) {
    if (n < 10) {
        activeSlideNumber.innerHTML = `0${(n + 1)}`;
    } else {
        activeSlideNumber.innerHTML = n + 1;
    }
}

initVisibleSlide(slides, 0);

arrRight.addEventListener('click', () => {
    slideRight(slides);
    setActiveSlideNumber(slideNumber);
});

arrLeft.addEventListener('click', () => {
    slideLeft(slides);
    setActiveSlideNumber(slideNumber);
});
