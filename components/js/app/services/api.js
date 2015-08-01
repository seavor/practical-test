APP.service("API", function($http){
	var BASE_URL = 'api/';
	
	return {
		get: function(route) {
			console.log('API Activated');
			return $http.get(BASE_URL + route + '.json');
		}
	};
});