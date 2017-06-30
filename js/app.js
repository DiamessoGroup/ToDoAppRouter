var app = angular.module('myShoppingList', ["ngRoute"]);

app.controller('myCtrl', function ($scope) {
    'use strict';
    $scope.products = [
        'milk',
        'bread',
        'cheese'
    ];

    $scope.addItem = function () {
        $scope.errorText = '';
        if (!$scope.addMe) {
            return;
        }

        if ($scope.products.indexOf($scope.addMe) === -1) {
            angular.element('#errorTextId').removeClass("w3-red");
            $scope.products.push($scope.addMe);
            $scope.addMe = '';
        } else {
            $scope.errorText = 'This item is already in your shopping list. Please enter a valid item.';
            angular.element('#errorTextId').addClass("w3-red");
        }
    };

    $scope.removeItem = function (index) {
        $scope.products.splice(index, 1);
    };
});

app.directive('shoppingListDirective', function () {
    return {
        restrict: "M",
        replace: true,
        templateUrl: "template/apptemplateshopping.html"
    };
});