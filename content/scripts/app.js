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

app.directive('textboxControl', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});
