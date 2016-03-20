'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        controllerAs: 'main'
      }).
      when('/about', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl',
        controllerAs: 'about'
      }).
      when('/contact', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });