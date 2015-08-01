APP.service("Resolvers", ['$q', '$state', '$rootScope', 'API', 'Storage', function($q, $state, $rootScope, API, Storage){
	return {
		pageData: function(route) {
		    var defer = $q.defer();

		    if (!Storage[route]) {
			    API.get(route)
			        .success(function(data){
			        	Storage[route] = JSON.stringify(data);
			        	defer.resolve(data);
			        })
			        .error(function(data){ 
			        	// @TODO Flash error (?)
			        	// console.log('Error: ', data);
			        	
			        	defer.reject(data);
			        });
			} else {
				defer.resolve(JSON.parse(Storage[route]));
			}
			console.dir(Storage);
		    return defer.promise;
		}
	};
}]);