app.factory('serviceWork', function() {
    
    var service = {            
        model : ['Finish Keynote','Meeting with partners','Close 10 sales this month']
    }
    return service;
});

app.controller('myWorkCtrl', function ($scope, serviceWork) {
//    $scope.products = [
//        'Finish Keynote',
//        'Meeting with partners',
//        'Close 10 sales this month'
//    ];

    $scope.products = serviceWork.model;
    
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


/*app.controller('myWorkCtrl', function ($scope,serviceWork) {
    'use strict';
    $scope.products = [
        'Finish Keynote',
        'Meeting with partners',
        'Close 10 sales this month'
    ];

    $scope.products = serviceWork;
    
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

