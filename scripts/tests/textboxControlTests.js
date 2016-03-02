describe("test framework set up", function() {
  it("Should return true", function() {
    expect(true).toBe(true);
  });
});

describe("textboxControl", function() {

  beforeEach(function() {
    module('teamTempApp');
  });

  beforeEach(inject(function($compile, $rootScope) {
    $scope = $rootScope;
    var element = angular.element(
      '<form name="form"><input type="text" name="firstname" ng-model="firstname" textboxControl></form>'
    );
    $scope.model = {
      firstname: null
    };
    $compile(element)($scope);
    $scope.$digest();
    form = $scope.form;
  }));

  it('should be valid initially', function() {
    expect(form.firstname.$valid).toBe(true);
  });

  it('should be invalid when user enters a number', function() {
    form.firstname.$setViewValue(1);
    expect(form.firstname.$valid).toBe(false);
  });

});
