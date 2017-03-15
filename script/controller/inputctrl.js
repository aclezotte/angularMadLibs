var app = angular.module("madLibs");

app.controller("inputCtrl", function($scope, $location, madLibsFactory) {
    
    $scope.sendWords = function(words) {
        
        console.log("inputCtrl:" + words[0]);
        
        madLibsFactory.sayWord(words);
        
        $location.path("/displaystory");
        
    };

});