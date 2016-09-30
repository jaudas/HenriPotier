'use strict';

bookshopApp.controller('ProductsCtrl', function($rootScope, $scope, $http, $location, CartService){

	var MOCK_URL = "offline.json";

	$scope.products = [];
	
	$http.get("http://henri-potier.xebia.fr/books").success(function(data){
			$scope.products=data;
	});
	

	$scope.addToCart = function (book) {
      CartService.addBook(book);
    };



});


