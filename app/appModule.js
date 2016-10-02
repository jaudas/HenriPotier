'use strict';

var bookshopApp = angular.module('bookshopApp', ['ngRoute']);


bookshopApp
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/components/home/homeView.html', 
          controller: ''
        })
        .when('/products', {
          templateUrl: 'app/components/products/productsView.html',
          controller: 'ProductsCtrl'
        })
        .when('/cart', {
          templateUrl: 'app/components/cart/cartView.html',
          controller: 'CartCtrl'
        })
        .otherwise({
          redirectTo: '/',
        });
  })
  .run(['CartService', function (CartService) {
    console.log("app run");
    CartService.init();
  }])
;


bookshopApp.service('CartService', [function(){

  this.init = function () {
    console.info("cart init");
      this.$cart = {
      books: []
    };
  };



  this.getCart = function () {
      return this.$cart.books;
  };


  this.addBook = function(addedbook){
    var book = this.getBook(addedbook.isbn)
    if(book == null){
      addedbook.quantity = 1;
      this.$cart.books.push(addedbook)
    }else{
      book.quantity++;
    }

    console.info("added ! ");
  };

  this.getBook = function (isbn) {
    var book = null;
    angular.forEach(this.$cart.books, function (b) {
      if (b.isbn === isbn) {
        book = b;
      }
    });
    return book;
  };

  this.remove = function(todelete){
    var index = this.$cart.books.indexOf(todelete);
    if (index>-1){
      this.$cart.books.splice(index, 1);
    }
  }

  this.changequantity = function (book, newquantity){
    var index = this.$cart.books.indexOf(book);
    
  }


}]);

