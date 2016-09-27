'use strict';

bookshopApp.controller('ProductsCtrl', function($scope, $http){

	var MOCK_URL = "offline.json";

	$scope.products = [];
	
	$http.get(MOCK_URL).success(function(data){
			$scope.products=data;
	});
	

/*	$scope.addToCart = function (book) {
      cartService.addBook(book);
      $rootScope.$broadcast('changeCart');
    };
*/


});


