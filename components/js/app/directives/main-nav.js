APP.directive('mainNav', function(API, Storage){

	function linker($scope, element, attrs) {
		if (!Storage.navigation) {
			API.get('navigation')
				.success(function(data){
					Storage.navigation = JSON.stringify(data.NAVIGATION);
					$scope.links = data.NAVIGATION;
				});
		} else {
			$scope.links = JSON.parse(Storage.navigation);
		}

	}

	return {
		restrict: 'E',
		link: linker,
		replace: true,
		scope: true,
		templateUrl: 'templates/directives/main-nav.html'
	}
});