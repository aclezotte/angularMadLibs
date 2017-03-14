var app = angular.module("madLibs");

app.controller("inputCtrl", function($scope, $location, madLibsFactory) {

    $scope.words = [];
    
    $scope.sendWords = function() {

        console.log(words[0]);

    };

});