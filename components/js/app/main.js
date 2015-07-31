var APP = angular.module("app", ["ui.router"]);

APP.config([ "$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "templates/views/home.html",
            controller: "HomeCtrl"
        });
        
}]);

APP.run(function($rootScope, $location, $state) {
    console.log('App Run Cycle');

    $rootScope.$on("$stateChangeStart", function(event, to, toParams, from, fromParams) {
    	console.log('App Route Cycle');
        
    });

    $rootScope.$on("$stateChangeSuccess", function(event, to, toParams, from, fromParams) {
        
    });
});