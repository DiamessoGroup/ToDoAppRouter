app.factory('serviceShopping', function() {
    
    var service = {            
        model : ['milk','bread','cheese',
        'grappes']
    }
    return service;
});


app.controller('myShoppingCtrl', function ($scope, serviceShopping) {
    'use strict'
    $scope.products = serviceShopping.model;

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

/*app.controller('myShoppingCtrl', function ($scope) {
    'use strict';
    $scope.products = [
        'milk',
        'bread',
        'cheese',
        'grappes'
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
});*/