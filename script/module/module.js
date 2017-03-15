jQuery(document).ready(function() {
    jQuery.backstretch("images/books.jpg");
});

var app = angular.module("madLibs", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    
    $routeProvider
        .when("/inputwords", {
        controller: "inputCtrl",
        templateUrl: "view/inputwords.html"
    })
        .when("/displaystory", {
        controller: "displayCtrl",
        templateUrl: "view/displaystory.html"
    })
        .otherwise({
        controller: "inputCtrl",
        templateUrl: "view/inputwords.html"
    });

    $locationProvider.hashPrefix("");

});
