var myAppModule = angular.module('sampleApp', []);

// Controller Declearation
myAppModule.controller('MainController', ['$scope', function($scope) {

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
	  $scope.addPerson = function () {
		$scope.people.push({
			name: $scope.person_name,
			city: $scope.person_city,
			state: $scope.person_state
		});
		$scope.person_name = '';
		$scope.person_city = '';
		$scope.person_state = '';
	  }
}]);

// // Customised Filter used in the View.
myAppModule.filter('greet', function() {
 return function(name) {
	// Put your logic Here	
    return 'Hello, ' + name + '!';
  };
});