/// <reference path="../typings/angularjs/angular.d.ts"/>

var app = angular.module('mainApp', ['ngRoute','ui.bootstrap']);

app.config(function ($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl',
		isViewEnabled: true,
		isAuthenticationNeeded: false
	}).when('/contact', {
		templateUrl: 'views/contactUs.html',
		controller: 'contactCtrl',
		isViewEnabled: true,
		isAuthenticationNeeded: false
	}).when('/employees', {
		templateUrl: 'views/table.html',
		isViewEnabled: true,
		controller: 'empCtrl',
		isAuthenticacionNeeded: false
	}).otherwise({
		redirectTo: '/home'
	});
});

app.factory('employees', function() {
	var employees = [{
		empId: 10000001,
		name: 'Santiago',
		lastName: 'Arizti',
		location: 'México',
		salary: 10000,
		happy: true
	},{
		empId: 10000002,
		name: 'Roberto',
		lastName: 'Lopez',
		location: 'USA',
		salary: 18000,
		happy: false
	},{
		empId: 10000003,
		name: 'Diego',
		lastName: 'Gomez',
		location: 'Canada',
		salary: 21000,
		happy: true
	},{
		empId: 10000004,
		name: 'Raul',
		lastName: 'Bonilla',
		location: 'Guatemala',
		salary: 11000,
		happy: true
	}];
	return {
		getEmployees: function (){
			return employees;
		},
		getEmployee: function (empId){
			return employees.filter(function(i){return i.empId==empId;})[0];
		},
		setEmployee: function(empId,obj){
			var emp = employees.filter(function(i){return i.empId==empId;})[0];
			_.extend(emp,obj);
			return true;
		}
	};
});

app.directive('empForm', function(){
	return {
		rescrict: 'E',
		controller: function($scope){
			var emp = $scope.emp = this;
			
			emp.testing = 'testing emp';
		},
		//controllerAs : 'emp',
		templateUrl: 'views/directives/empForm.html'
	};
});