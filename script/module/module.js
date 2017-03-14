var app = angular.module("madLibs", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

    console.log("hello world");
    
    $routeProvider
        .when("/inputwords", {
        controller: "inputCtrl",
        templateUrl: "view/inputwords.html"
    })
        .when("/displaystory", {
        controller: "displayCtrl",
        templateUrl: "view/displaystory.html"
    });

    $locationProvider.hashPrefix("");

});
