import {myh1} from '../js/sect-head';
const bootstrp4 = require('bootstrap/scss/bootstrap.scss');
//const myanimate = require('animate.css/animate.min.css');
const css = require('./app.scss');
const mystyle = require('./style.scss');
const mymedia = require('./media.scss');
const AOS = require('aos');
//const angular = require('angular');

const myApp = angular.module("myApp", []);

/* myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{})
    .when('str', {})
}); */

myApp.controller('firstCont', ['$scope', '$log', function ($scope, $log) {
    
    $scope.name = "Juan C White";
    console.log($scope);
    console.log(myh1);
    $scope.myheader = myh1;
}]);

AOS.init();

const x = document.createElement("p"); // Create a <p> element
const t = document.createTextNode("This is a cool paragraph."); // Create a text node
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