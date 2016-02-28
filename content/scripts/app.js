angular.module('teamTempApp', ['ngRoute']);

// Route config
angular.module('teamTempApp').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/a.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    })
    .when('/user', {
      templateUrl: 'pages/user.html',
      controller: 'UserController',
      controllerAs: 'ctrl'
    });
}); 

// MainController.js
angular
  .module('teamTempApp')
  .controller('UserController', function() {
    var self = this;

    self.message = "Hello";
  });
