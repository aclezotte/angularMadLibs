var app = angular.module("madLibs");

app.controller("inputCtrl", function($scope, $location, madLibsFactory) {
    
    $scope.sendWords = function(words) {
        
        madLibsFactory.sayWord(words);
        
        $location.path("/displaystory");
        
    };

});