var app = angular.module("madLibs");

app.controller("displayCtrl", function($scope, $location, madLibsFactory) {

    $scope.displayWords = madLibsFactory.returnWords();
    
    console.log("displayCtrl:" + $scope.displayWords[0]);
    
    $scope.goBack = function() {
      $location.path("/inputwords");
    };

});