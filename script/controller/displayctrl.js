var app = angular.module("madLibs");

app.controller("displayCtrl", function($scope, $location, madLibsFactory) {

    $scope.displayWords = madLibsFactory.returnWords();
    
    $scope.goBack = function() {
      $location.path("/inputwords");
    };

});