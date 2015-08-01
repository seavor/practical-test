APP.service("Resolvers", [ "$q", "$state", "$rootScope", "API", function($q, $state, $rootScope, API) {
    return {
        pageData: function(route) {
            var defer = $q.defer();
            API.get(route).success(function(data) {
                $rootScope.backgroundImage = data.SLIDES[0].IMAGE;
                defer.resolve(data);
            }).error(function(data) {
                defer.reject(data);
            });
            return defer.promise;
        }
    };
} ]);