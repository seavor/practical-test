APP.directive("footer", function() {
    function linker($scope, element, attrs) {}
    return {
        restrict: "E",
        link: linker,
        templateUrl: "templates/directives/footer.html"
    };
});