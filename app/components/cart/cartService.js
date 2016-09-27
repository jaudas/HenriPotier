'use strict';

bookshopApp.service('CartService', function(){


	this.init = function () {
		console.info("cart init");
	  	this.$cart = {
	    books: []
	  };
	};


	/*this.addToCart = function(addedbook){
		console.info("added ! ");
		this.$cart.books.push(addedbook);
	};*/

	this.getCart = function () {
      return this.$cart.books;
    };



});