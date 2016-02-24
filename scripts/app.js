angular.module('teamTempApp', ['ngRoute']);

// Route config
angular.module('teamTempApp').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/user.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    });
});

// MyController.js
angular
  .module('teamTempApp')
  .controller('MainController', function() {
    var self = this;

    self.message = "Hello";
  });
