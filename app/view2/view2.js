'use strict';

angular.module('myApp.view2', [])

.controller('View2Ctrl', ['$scope',function($scope) {
	
	$scope.hoy = new Date();



	var control = [
		{
			'repartidor':'Pablo',
			'date' : '03/03/2016',
			'xdoce': 15,
			'xveinte': 19,
			'soda':23
		},
		{
			'repartidor':'Marcelo P',
			'date' : '04/03/2016',
			'xdoce': 5,
			'xveinte': 9,
			'soda':23
		},
		{
			'repartidor':'Gustavo',
			'date': '07/03/2016',
			'xdoce': 12,
			'xveinte': 17,
			'soda':23
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