'use strict';

bookshopApp.controller('CartCtrl', function($scope, $http, $location, CartService){
	$scope.offers = [];

	$scope.cart = CartService.getCart();

	$scope.ISBN = function(){
		var ISBNList=[];
		angular.forEach($scope.cart, function(book){
			for(var nbitem = 0; nbitem<book.quantity;nbitem++){
				ISBNList.push(book.isbn);
			} 
		})
		return ISBNList;
	}

	$scope.initialPrice = function(){
		var price = 0;
		angular.forEach($scope.cart, function(book){
			price += book.price * book.quantity;
		})
		return price;
	}

	$scope.discountPrice = function(){
		var total = $scope.initialPrice();
		var finalprice = total;
		var newprice = 0;
		$scope.bestOffer = '';
		angular.forEach($scope.offers, function(offer){
			if(offer.type=='percentage'){
				newprice = (total * (1 - offer.value / 100)).toFixed(2);
			} else if(offer.type=='minus'){
				newprice = total - offer.value;
			}else if(offer.type =='slice'){
				newprice = total - Math.trunc(total/offer.sliceValue) * offer.value;
			}
			if(newprice<finalprice){
				finalprice = newprice;
				$scope.bestOffer = offer;			
			}
		});
		return finalprice;
	}


	$http.get('http://henri-potier.xebia.fr/books/' + $scope.ISBN() + '/commercialOffers').success(function (data) {
	  $scope.offers = data.offers;
	  $scope.discountPrice();
	});

	$scope.removeFromCart = function (book) {
      CartService.remove(book);
    };

});