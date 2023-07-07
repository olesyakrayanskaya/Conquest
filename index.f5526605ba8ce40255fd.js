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

/***/ "./src/js/details.js":
/*!***************************!*\
  !*** ./src/js/details.js ***!
  \***************************/
/***/ (() => {

eval("const detailLink = document.querySelectorAll('.catalog__detail');\nconst detailClose = document.querySelectorAll('.details__close');\nconst modal = document.querySelectorAll('.catalog__modal');\ndetailLink.forEach(link => {\n  link.addEventListener('click', () => {\n    link.closest('.catalog__item').querySelector('.details').classList.add('visible');\n    window.addEventListener('click', event => {\n      if (!event.target.closest('.catalog__modal') && event.target !== link) {\n        link.closest('.catalog__item').querySelector('.details').classList.remove('visible');\n      }\n    });\n  });\n});\ndetailClose.forEach(close => {\n  close.addEventListener('click', () => {\n    close.closest('.catalog__item').querySelector('.details').classList.remove('visible');\n  });\n});\nmodal.forEach(mod => {\n  window.addEventListener('scroll', () => {\n    const scrollTop = window.scrollY;\n    const windowHeight = document.documentElement.clientHeight;\n    const m = mod;\n    if (scrollTop >= windowHeight / 4) {\n      m.style.transform = `translateY(${scrollTop}px)`;\n    } else {\n      m.style.transform = 'translateY(0)';\n    }\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/details.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/details.js"]();
/******/ 	
/******/ })()
;