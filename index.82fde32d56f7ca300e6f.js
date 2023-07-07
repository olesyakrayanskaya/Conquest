/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("const arrLeft = document.querySelector('.slider__btn_left');\nconst arrRight = document.querySelector('.slider__btn_right');\nconst slides = document.querySelectorAll('.slider__img');\nconst activeSlideNumber = document.querySelector('.slider__number');\nlet slideNumber;\nfunction initVisibleSlide(arrSlides, n) {\n  for (let i = 0; i < arrSlides.length; i++) {\n    arrSlides[i].classList.remove('slider__img_visible');\n  }\n  slideNumber = n;\n  arrSlides[slideNumber].classList.add('slider__img_visible');\n}\nfunction slideRight(arrSlides) {\n  slideNumber += 1;\n  if (slideNumber >= arrSlides.length) {\n    arrSlides[slideNumber - 1].classList.remove('slider__img_visible');\n    slideNumber = 0;\n    arrSlides[slideNumber].classList.add('slider__img_visible');\n  } else {\n    arrSlides[slideNumber - 1].classList.remove('slider__img_visible');\n    arrSlides[slideNumber].classList.add('slider__img_visible');\n  }\n}\nfunction slideLeft(arrSlides) {\n  if (slideNumber <= 0) {\n    arrSlides[slideNumber].classList.remove('slider__img_visible');\n    slideNumber = arrSlides.length - 1;\n    arrSlides[slideNumber].classList.add('slider__img_visible');\n  } else {\n    arrSlides[slideNumber].classList.remove('slider__img_visible');\n    slideNumber -= 1;\n    arrSlides[slideNumber].classList.add('slider__img_visible');\n  }\n}\nfunction setActiveSlideNumber(n) {\n  if (n < 10) {\n    activeSlideNumber.innerHTML = `0${n + 1}`;\n  } else {\n    activeSlideNumber.innerHTML = n + 1;\n  }\n}\ninitVisibleSlide(slides, 0);\narrRight.addEventListener('click', () => {\n  slideRight(slides);\n  setActiveSlideNumber(slideNumber);\n});\narrLeft.addEventListener('click', () => {\n  slideLeft(slides);\n  setActiveSlideNumber(slideNumber);\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/slider.js"]();
/******/ 	
/******/ })()
;