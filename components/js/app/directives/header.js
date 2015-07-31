APP.directive('header', function(){

	function linker($scope, element, attrs) {
		console.log('Header Registered');

	}

	return {
		restrict: 'E',
		link: linker,
		templateUrl: 'templates/directives/header.html'
	}
});