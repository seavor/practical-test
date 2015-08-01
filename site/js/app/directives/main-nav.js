APP.directive("mainNav", function(API) {
    function linker($scope, element, attrs) {
        API.get("navigation").success(function(data) {
            $scope.links = data.NAVIGATION;
        });
    }
    return {
        restrict: "E",
        link: linker,
        replace: true,
        scope: true,
        templateUrl: "templates/directives/main-nav.html"
    };
});