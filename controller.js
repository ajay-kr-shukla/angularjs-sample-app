var myAppModule = angular.module('sampleApp', []);

// Controller Declaration
myAppModule.controller('MainController', ['$scope', '$http', 'myFactory', function($scope, $http, myFactory) {

	$scope.tab	=	1;
	  $scope.people = [
		{
		  name: 'Pramod Kumar',
		  city: 'New York City',
		  state: 'New York'
		},
		{
		  name: 'Binod Kumar',
		  city: 'Oklahoma City',
		  state: 'Oklahoma'
		},
		{
		  name: 'Subhashish',
		  city: 'Topeka',
		  state: 'Kansas'
		}
	  ];

	  // Pushing a record in people array
	  $scope.addPerson = function () {
		$scope.people.push({
			name: $scope.person_name,
			city: $scope.person_city,
			state: $scope.person_state
		});
		$scope.person_name = '';
		$scope.person_city = '';
		$scope.person_state = '';
	  };


		// Ajax Call
	   $scope.ajaxCall = function () {
			var responsePromise = $http.get("ajax-test-data.html");
			responsePromise.success(function(data, status, headers, config) {
				$scope.ajaxData = data;
			});
			responsePromise.error(function(data, status, headers, config) {
				alert("AJAX failed!");
			});
	  }

	$scope.di =myFactory;


}]);

// // Customised Filter used in the View.
myAppModule.filter('greet', function() {
 return function(name) {
	// Put your logic Here	
    return 'Hello, ' + name + '!';
  };
});


// Routing Controller from Route URL 1
myAppModule.controller('Route1Controller', function($scope) {
    $scope.routeMsg1 = 'You Clicked on Routing URL1 ';
});
 
 
// Routing Controller from Route URL 2
myAppModule.controller('Route2Controller', function($scope) {
    $scope.routeMsg2 = 'You Clicked on Routing URL2 ';
});



// Routing for HREF
myAppModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Routing1', { 
        templateUrl: 'route1.html',
        controller: 'Route1Controller'
    }).
      when('/Routing2', {
        templateUrl: 'route2.html',
        controller: 'Route2Controller'
      }).
      otherwise({
//        redirectTo: '/routefree.html'
      });
}]);

myAppModule.value("numberValue", 999);

myAppModule.factory("myFactory", function(numberValue) {
    return "Dependency Injection call ------->  value: " + numberValue;
});



