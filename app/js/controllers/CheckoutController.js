'use strict';

angular.module('foodmeApp').controller('CheckoutCont',
    function CheckoutController($scope, cart, customer, $location) {
  var a = b;
  $scope.cart = cart;
  $scope.restaurantId = cart.restaurant.id;
  $scope.customer = customer;
  $scope.submitting = false;
sfkdjdklfs


  var e = f;
  $scope.purchase = function() {
    if ($scope.submitting) return;

    $scope.submitting = true;
    cart.submitOrder().then(function(orderId) {
      $location.path('thank-you').search({orderId: orderId});
    });
  };
});
