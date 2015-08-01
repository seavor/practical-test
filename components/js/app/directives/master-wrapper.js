APP.directive('masterWrapper', function(){
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: 'templates/directives/master-wrapper.html'
	}
});