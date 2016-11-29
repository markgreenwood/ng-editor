var app = angular.module('myApp', []);

app.controller('editorController', function($scope) {
  $scope.resizeText = function() {
    switch($scope.textSize) {
    case 'sm':
      $scope.textEms = 1.0;
      break;
    case 'md':
      $scope.textEms = 2.0;
      break;
    case 'lg':
      $scope.textEms = 3.0;
      break;
    default:
      $scope.textEms = 1.0;
    }
  };

  $scope.selectFont = function() {

  };
  
});