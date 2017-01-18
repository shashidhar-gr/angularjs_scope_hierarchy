var myApp = angular.module('myApp', []);

myApp.factory('myFactory', [function() {
	var myData = {};
	myData.dataCount = 0;

	var service = {}
	service.getData= getData;
	service.setData = setData;

	return service;

	function getData() {
		return myData;
	}

	function setData() {
		myData.dataCount++;
	}

}])

myApp.controller('thirdController', ['$scope', 'myFactory', function($scope, myFactory) {
	
}]);

myApp.controller('firstController', ['$scope', 'myFactory', function($scope, myFactory) {
		
	$scope.count = 0;	

	$scope.add = function () {
		myFactory.setData();
		$scope.count = myFactory.getData().dataCount;
	}

}]);

myApp.controller('secondController', ['$scope', 'myFactory', function($scope, myFactory) {
		
	$scope.count = 0;	

	$scope.add = function () {
		myFactory.setData();
		$scope.count = myFactory.getData().dataCount;
	}
	
}]);