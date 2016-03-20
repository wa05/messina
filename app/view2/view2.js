'use strict';

angular.module('myApp.view2', [])

.controller('View2Ctrl', ['$scope',function($scope) {
	
	$scope.hoy = new Date();



	var control = [
		{
			'repartidor':,
			'date' : '03/03/2016',
			'xdoce': 15,
			'xveinte': 19
		},
		{
			'repartidor':,
			'date' : '04/03/2016',
			'xdoce': 5,
			'xveinte': 9
		},
		{
			'repartidor':,
			'date': '07/03/2016',
			'xdoce': 12,
			'xveinte': 17
		}
	];
	$scope.pablo = {};
	$scope.pablo.control = control;

	console.log($scope.pablo);

	$scope.new={};

	$scope.save = function(){
		$scope.pablo.control.push($scope.new);
		$scope.new = {};
	};
}]);