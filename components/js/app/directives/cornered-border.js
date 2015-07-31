APP.directive('corneredBorder', function(){

	function linker($scope, element, attrs) {
		var $element = $(element);

		$element
			.addClass('cornered-border-wrapper')
			.append(createDom());

	}

	function createDom() {
		var $wrapper = $('<ul class="cornered-border-list">'),
			items = 4,
			i = 0;

		for (i; items > i; i+=1) {
			$wrapper.append($('<li>'));
		}

		return $wrapper;

	}

	return {
		restrict: 'A',
		link: linker
	}
});