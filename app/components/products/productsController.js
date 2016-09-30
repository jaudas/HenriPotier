'use strict';

bookshopApp.controller('ProductsCtrl', function($rootScope, $scope, $http, $location, CartService){

	var MOCK_URL = "offline.json";

	$scope.products = [];
	
	$http.get(MOCK_URL).success(function(data){
			$scope.products=data;
	});
	

	$scope.addToCart = function (book) {
      CartService.addBook(book);
    };



});


