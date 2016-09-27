'use strict';

bookshopApp.controller('CartCtrl', function($scope, $http, cartService){
	$scope.offers = [];
	$scope.cart = cartService.getCart();
	
});


