'use strict';

angular.module('myApp.view2', [])

.controller('View2Ctrl', 
	['$scope','$filter',function($scope,$filter) {
	
	$scope.hoy = new Date();

	var control = [
		{
			'repartidor':'Pablo',
			'fecha' : '03/03/2016',
			'xdoce': 15,
			'xveinte': 19,
			'soda':23,
			'totaldia':1200
		},
		{
			'repartidor':'Marcelo P',
			'fecha' : '04/03/2016',
			'xdoce': 5,
			'xveinte': 9,
			'soda':23,
			'totaldia':1400
		},
		{
			'repartidor':'Gustavo',
			'fecha': '07/03/2016',
			'xdoce': 12,
			'xveinte': 17,
			'soda':23,
			'totaldia':2400
		}
	];
	$scope.pablo = {};
	$scope.pablo.control = control;

	$scope.new={};
	$scope.new.fecha = $scope.hoy;

	$scope.save = function(){
		$scope.pablo.control.push($scope.new);
		$scope.new = {};
	$scope.new.fecha = $scope.hoy;
	};

	var orderBy = $filter('orderBy');

	$scope.order = function(predicate){
		$scope.pablo.control= orderBy($scope.pablo.control,predicate);
		/*
		$scope.predicate = predicate;
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.control = orderBy($scope.control, predicate, $scope.reverse);
	*/
	};
	$scope.order('fecha',true);

}]);