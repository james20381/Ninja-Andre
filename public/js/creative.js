/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),

/***/ 50:
/***/ (function(module, exports) {

(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 57
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function navbarCollapse() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
})(jQuery); // End of use strict

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZThlZDg5ZTJmODA1YmI3N2YwOTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jcmVhdGl2ZS5qcyJdLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhvc3RuYW1lIiwidGFyZ2V0IiwiaGFzaCIsImxlbmd0aCIsInNsaWNlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImNvbGxhcHNlIiwic2Nyb2xsc3B5IiwibmF2YmFyQ29sbGFwc2UiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwid2luZG93Iiwic2Nyb2xsIiwic3IiLCJTY3JvbGxSZXZlYWwiLCJyZXZlYWwiLCJkdXJhdGlvbiIsInNjYWxlIiwiZGlzdGFuY2UiLCJkZWxheSIsIm1hZ25pZmljUG9wdXAiLCJkZWxlZ2F0ZSIsInR5cGUiLCJ0TG9hZGluZyIsIm1haW5DbGFzcyIsImdhbGxlcnkiLCJlbmFibGVkIiwibmF2aWdhdGVCeUltZ0NsaWNrIiwicHJlbG9hZCIsImltYWdlIiwidEVycm9yIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REEsQ0FBQyxVQUFTQSxDQUFULEVBQVk7QUFDWCxlQURXLENBQ0c7O0FBRWQ7O0FBQ0FBLElBQUUsZ0RBQUYsRUFBb0RDLEtBQXBELENBQTBELFlBQVc7QUFDbkUsUUFBSUMsU0FBU0MsUUFBVCxDQUFrQkMsT0FBbEIsQ0FBMEIsS0FBMUIsRUFBaUMsRUFBakMsS0FBd0MsS0FBS0QsUUFBTCxDQUFjQyxPQUFkLENBQXNCLEtBQXRCLEVBQTZCLEVBQTdCLENBQXhDLElBQTRFRixTQUFTRyxRQUFULElBQXFCLEtBQUtBLFFBQTFHLEVBQW9IO0FBQ2xILFVBQUlDLFNBQVNOLEVBQUUsS0FBS08sSUFBUCxDQUFiO0FBQ0FELGVBQVNBLE9BQU9FLE1BQVAsR0FBZ0JGLE1BQWhCLEdBQXlCTixFQUFFLFdBQVcsS0FBS08sSUFBTCxDQUFVRSxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBZ0MsR0FBbEMsQ0FBbEM7QUFDQSxVQUFJSCxPQUFPRSxNQUFYLEVBQW1CO0FBQ2pCUixVQUFFLFlBQUYsRUFBZ0JVLE9BQWhCLENBQXdCO0FBQ3RCQyxxQkFBWUwsT0FBT00sTUFBUCxHQUFnQkMsR0FBaEIsR0FBc0I7QUFEWixTQUF4QixFQUVHLElBRkgsRUFFUyxlQUZUO0FBR0EsZUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBWEQ7O0FBYUE7QUFDQWIsSUFBRSxvQkFBRixFQUF3QkMsS0FBeEIsQ0FBOEIsWUFBVztBQUN2Q0QsTUFBRSxrQkFBRixFQUFzQmMsUUFBdEIsQ0FBK0IsTUFBL0I7QUFDRCxHQUZEOztBQUlBO0FBQ0FkLElBQUUsTUFBRixFQUFVZSxTQUFWLENBQW9CO0FBQ2xCVCxZQUFRLFVBRFU7QUFFbEJNLFlBQVE7QUFGVSxHQUFwQjs7QUFLQTtBQUNBLE1BQUlJLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBVztBQUM5QixRQUFJaEIsRUFBRSxVQUFGLEVBQWNZLE1BQWQsR0FBdUJDLEdBQXZCLEdBQTZCLEdBQWpDLEVBQXNDO0FBQ3BDYixRQUFFLFVBQUYsRUFBY2lCLFFBQWQsQ0FBdUIsZUFBdkI7QUFDRCxLQUZELE1BRU87QUFDTGpCLFFBQUUsVUFBRixFQUFja0IsV0FBZCxDQUEwQixlQUExQjtBQUNEO0FBQ0YsR0FORDtBQU9BO0FBQ0FGO0FBQ0E7QUFDQWhCLElBQUVtQixNQUFGLEVBQVVDLE1BQVYsQ0FBaUJKLGNBQWpCOztBQUVBO0FBQ0FHLFNBQU9FLEVBQVAsR0FBWUMsY0FBWjtBQUNBRCxLQUFHRSxNQUFILENBQVUsV0FBVixFQUF1QjtBQUNyQkMsY0FBVSxHQURXO0FBRXJCQyxXQUFPLEdBRmM7QUFHckJDLGNBQVU7QUFIVyxHQUF2QixFQUlHLEdBSkg7QUFLQUwsS0FBR0UsTUFBSCxDQUFVLFlBQVYsRUFBd0I7QUFDdEJDLGNBQVUsSUFEWTtBQUV0QkcsV0FBTztBQUZlLEdBQXhCO0FBSUFOLEtBQUdFLE1BQUgsQ0FBVSxhQUFWLEVBQXlCO0FBQ3ZCQyxjQUFVLEdBRGE7QUFFdkJDLFdBQU8sR0FGZ0I7QUFHdkJDLGNBQVU7QUFIYSxHQUF6QixFQUlHLEdBSkg7O0FBTUE7QUFDQTFCLElBQUUsZ0JBQUYsRUFBb0I0QixhQUFwQixDQUFrQztBQUNoQ0MsY0FBVSxHQURzQjtBQUVoQ0MsVUFBTSxPQUYwQjtBQUdoQ0MsY0FBVSwwQkFIc0I7QUFJaENDLGVBQVcsZ0JBSnFCO0FBS2hDQyxhQUFTO0FBQ1BDLGVBQVMsSUFERjtBQUVQQywwQkFBb0IsSUFGYjtBQUdQQyxlQUFTLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFIRixLQUx1QjtBQVVoQ0MsV0FBTztBQUNMQyxjQUFRO0FBREg7QUFWeUIsR0FBbEM7QUFpQkQsQ0E1RUQsRUE0RUdDLE1BNUVILEUsQ0E0RVksb0IiLCJmaWxlIjoiL2pzL2NyZWF0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU4ZWQ4OWUyZjgwNWJiNzdmMDk4IiwiKGZ1bmN0aW9uKCQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8vIFN0YXJ0IG9mIHVzZSBzdHJpY3RcblxuICAvLyBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGpRdWVyeSBlYXNpbmdcbiAgJCgnYS5qcy1zY3JvbGwtdHJpZ2dlcltocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6ICh0YXJnZXQub2Zmc2V0KCkudG9wIC0gNTcpXG4gICAgICAgIH0sIDEwMDAsIFwiZWFzZUluT3V0RXhwb1wiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gQ2xvc2VzIHJlc3BvbnNpdmUgbWVudSB3aGVuIGEgc2Nyb2xsIHRyaWdnZXIgbGluayBpcyBjbGlja2VkXG4gICQoJy5qcy1zY3JvbGwtdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJy5uYXZiYXItY29sbGFwc2UnKS5jb2xsYXBzZSgnaGlkZScpO1xuICB9KTtcblxuICAvLyBBY3RpdmF0ZSBzY3JvbGxzcHkgdG8gYWRkIGFjdGl2ZSBjbGFzcyB0byBuYXZiYXIgaXRlbXMgb24gc2Nyb2xsXG4gICQoJ2JvZHknKS5zY3JvbGxzcHkoe1xuICAgIHRhcmdldDogJyNtYWluTmF2JyxcbiAgICBvZmZzZXQ6IDU3XG4gIH0pO1xuXG4gIC8vIENvbGxhcHNlIE5hdmJhclxuICB2YXIgbmF2YmFyQ29sbGFwc2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoJChcIiNtYWluTmF2XCIpLm9mZnNldCgpLnRvcCA+IDEwMCkge1xuICAgICAgJChcIiNtYWluTmF2XCIpLmFkZENsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIiNtYWluTmF2XCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLXNocmlua1wiKTtcbiAgICB9XG4gIH07XG4gIC8vIENvbGxhcHNlIG5vdyBpZiBwYWdlIGlzIG5vdCBhdCB0b3BcbiAgbmF2YmFyQ29sbGFwc2UoKTtcbiAgLy8gQ29sbGFwc2UgdGhlIG5hdmJhciB3aGVuIHBhZ2UgaXMgc2Nyb2xsZWRcbiAgJCh3aW5kb3cpLnNjcm9sbChuYXZiYXJDb2xsYXBzZSk7XG5cbiAgLy8gU2Nyb2xsIHJldmVhbCBjYWxsc1xuICB3aW5kb3cuc3IgPSBTY3JvbGxSZXZlYWwoKTtcbiAgc3IucmV2ZWFsKCcuc3ItaWNvbnMnLCB7XG4gICAgZHVyYXRpb246IDYwMCxcbiAgICBzY2FsZTogMC4zLFxuICAgIGRpc3RhbmNlOiAnMHB4J1xuICB9LCAyMDApO1xuICBzci5yZXZlYWwoJy5zci1idXR0b24nLCB7XG4gICAgZHVyYXRpb246IDEwMDAsXG4gICAgZGVsYXk6IDIwMFxuICB9KTtcbiAgc3IucmV2ZWFsKCcuc3ItY29udGFjdCcsIHtcbiAgICBkdXJhdGlvbjogNjAwLFxuICAgIHNjYWxlOiAwLjMsXG4gICAgZGlzdGFuY2U6ICcwcHgnXG4gIH0sIDMwMCk7XG5cbiAgLy8gTWFnbmlmaWMgcG9wdXAgY2FsbHNcbiAgJCgnLnBvcHVwLWdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcbiAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgIHR5cGU6ICdpbWFnZScsXG4gICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxuICAgIG1haW5DbGFzczogJ21mcC1pbWctbW9iaWxlJyxcbiAgICBnYWxsZXJ5OiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxuICAgICAgcHJlbG9hZDogWzAsIDFdXG4gICAgfSxcbiAgICBpbWFnZToge1xuICAgICAgdEVycm9yOiAnPGEgaHJlZj1cIiV1cmwlXCI+VGhlIGltYWdlICMlY3VyciU8L2E+IGNvdWxkIG5vdCBiZSBsb2FkZWQuJ1xuICAgIH1cbiAgfSk7XG5cblxuXG59KShqUXVlcnkpOyAvLyBFbmQgb2YgdXNlIHN0cmljdFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jcmVhdGl2ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=