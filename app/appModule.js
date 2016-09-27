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
  .run(['cartService', function (cartService) {
    cartService.init();
  }])
;

