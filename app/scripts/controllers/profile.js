'use strict';

/**
 * @ngdoc function
 * @name fitconApp.controller:ProfCtrl
 * @description
 * # MainCtrl
 * Controller of the fitconApp
 */
 app.controller('ProfCtrl', ['$scope', '$location', function ($scope, $location) {

 	$scope.currentName = "Overview";
 	$scope.activeLink = "prof-overview";

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

 	$scope.setActive = function(newAct, curName){
 		if(newAct !== $scope.activeLink){
 			$('#'+newAct).attr('class', 'active');
 			$('#'+$scope.activeLink).attr('class', '');
 			$scope.activeLink = newAct;
 			$scope.currentName = curName;
 			console.log("curName: " +curName);
 		}
 	};
 	$scope.activeTab = function (name) {
 		return $scope.currentName ===name;
 	};
 }]);



//  $(document).ready(function(){
//   var cosPoints = []; 
//   for (var i=0; i<2*Math.PI; i+=0.1){ 
//      cosPoints.push([i, Math.cos(i)]); 
//   } 
//   var plot2 = $.jqplot("chart1", [cosPoints], {  
//       series:[{showMarker:false}],
//       axes:{
//         xaxis:{
//           label:'Angle (radians)',
//           labelRenderer: $.jqplot.CanvasAxisLabelRenderer
//         },
//         yaxis:{
//           label:'Cosine',
//           labelRenderer: $.jqplot.CanvasAxisLabelRenderer
//         }
//       }
//   });
// });
