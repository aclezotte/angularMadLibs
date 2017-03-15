var app = angular.module("madLibs");

app.factory("madLibsFactory", function() {

    var savedWords = [];

    return {
       
        sayWord: function(words) {
            console.log("factory:" + words[0]);
            savedWords = words;
        },
        
        returnWords: function() {
            return savedWords;
        }
        
    };
    
});