
var mainApp = angular.module("myApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'AppointmentController'
    })
    .when('/EditAppointment', {
      templateUrl: 'edit-appt.html',
      controller: 'AppointmentController'
    })
    .when('/NewAppointment', {
      templateUrl: 'new-appt.html',
      controller: 'AppointmentController'
    })
    .when('/AppointmentDetails', {
      templateUrl: 'details-appt.html',
      controller: 'AppointmentController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

mainApp.controller('AppointmentController', function($scope){
  $scope.students = [
    {name: 'Mark Waugh', city: 'New York'},
    {name: 'Steve Jonathan', city: 'London'},
    {name: 'John Marcus', city: 'Paris'}
  ];

  $scope.message = "This is a test message."

});
