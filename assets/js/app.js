
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
  $scope.appointment =
[
  {AppointmentID: '1', Title:'Meet with Ash',Street:'42 Friend St.', CityState:'Durham', Day:'9-12-2016',Time: '3pm'},

  {AppointmentID: '2', Title:'Lunch with Misty',Street:'123 Brunch Ave.', CityState:'Little Rock', Day:'9-12-2016',Time: '3pm'},

  {AppointmentID: '3', Title:'Brunch with Brock',Street:'42 Friend St.', CityState:'Raleigh', Day:'9-12-2016',Time: '3pm'},
]
  $scope.message = "This is a test message."

});
