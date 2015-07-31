APP.directive('footer', function(){

	function linker($scope, element, attrs) {
		console.log('Footer Registered');

	}

	return {
		restrict: 'E',
		link: linker,
		templateUrl: 'templates/directives/footer.html'
	}
});