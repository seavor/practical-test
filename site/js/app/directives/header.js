APP.directive("header", function() {
    function linker($scope, element, attrs) {}
    return {
        restrict: "E",
        link: linker,
        templateUrl: "templates/directives/header.html"
    };
});