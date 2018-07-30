webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sectHead = __webpack_require__(4);

var bootstrp4 = __webpack_require__(5);
//const myanimate = require('animate.css/animate.min.css');
var css = __webpack_require__(6);
var mystyle = __webpack_require__(7);
var mymedia = __webpack_require__(8);
var AOS = __webpack_require__(0);
//const angular = require('angular');

var myApp = angular.module("myApp", []);

/* myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{})
    .when('str', {})
}); */

myApp.controller('firstCont', ['$scope', '$log', function ($scope, $log) {

    $scope.name = "Juan C White";
    console.log($scope);
    console.log(_sectHead.myh1);
    $scope.myheader = _sectHead.myh1;
}]);

AOS.init();

var x = document.createElement("p"); // Create a <p> element
var t = document.createTextNode("This is a cool paragraph."); // Create a text node
x.appendChild(t); // Append the text to <p>
document.body.appendChild(x); // Append <p> to <body>


// $scope
//     .$apply(function () {
//         $('#navbarNavDropdown ul li a')
//             .click(function (event) {
//                 //event.preventDefault();
//                 var link = this;
//                 $.smoothScroll({scrollTarget: link.hash, easing: 'swing', speed: 1000});
//             });

//         // AOS.init();
//     });

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var myh1 = exports.myh1 = "<h1 style=\"color:black;\"> Juan is cool </h1>";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[3]);