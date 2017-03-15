var app = angular.module("madLibs");

app.factory("madLibsFactory", function() {

    var savedWords = [];

    return {
       
        sayWord: function(words) {
            savedWords = words;
        },
        
        returnWords: function() {
            return savedWords;
        }
        
    };
    
});