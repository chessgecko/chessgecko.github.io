'use strict';

/**
 * @ngdoc function
 * @name fitconApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fitconApp
 */
 app.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];
 	$scope.redirectRegister = function(){
 		$location.path("/register");
 	};
 	$scope.redirectMain = function(){
 		$location.path("/");
 	};
 	$scope.redirectLogin = function(){
 		$location.path("/login");
 	};
 	$scope.redirectBusreg = function(){
 		$location.path("/busRegister");
 	};


 }]);
