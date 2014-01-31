app.controller('FriendController', function($scope, $http){
	$http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json').success(function(data) {
		$scope.friends = data.results;
		angular.forEach($scope.friends, function(detail){
			detail.friend_count = parseInt(detail.friend_count, 10);
		});
		console.log($scope.friends);
	});

	$scope.searchTerm = {
		name: '',
		current_location: ''
	}

	$scope.searchSort = 'name';
	$scope.sortAZ = false;
});




