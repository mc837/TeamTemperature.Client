angular.module('teamTempApp', ['ngRoute']);

// Route config
angular.module('teamTempApp').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
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
  .controller('MainController', function() {
    var self = this;
    self.message = "Hello";
  });

// UserController.js
angular
  .module('teamTempApp')
  .controller('UserController', ['$http', '$scope', function($http) {
    var self = this;
    self.formData = {};

    self.submit = function() {
      $http.post('http://localhost:50211/api/user/add',
          JSON.stringify(self.getUserData()))
        .success(function() {
          console.log('Success');
        })
        .error(function() {
          console.log('Failed');
        });
    };

    self.getUserData = function() {
      return {
        FirstName: self.formData.firstname,
        Surname: self.formData.surname,
        Email: self.formData.email,
        Priviledge: self.formData.priviledge
      };
    };

  }]);

var CHAR_REGEX = /^[A-Za-z]+$/;
angular
  .module('teamTempApp')
  .directive('textboxControl', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        console.log("here");
        ctrl.$validators.textboxControl = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }
          if (CHAR_REGEX.test(viewValue)) {
            // it is valid
            return true;
          }
          // it is invalid
          return false;
        };
      }
    };
  });

var INTEGER_REGEXP = /^\-?\d+$/;
angular
  .module('teamTempApp')
  .directive('integer', function() {
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
