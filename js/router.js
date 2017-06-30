app.config(function ($routeProvider) {
    $routeProvider
        .when("/shoppingapp", {
            templateUrl: "template/apptemplateshopping.html",
            controller: 'myShoppingCtrl'
        })
        .when("/worktodo", {
            templateUrl: "template/apptemplatework.html",
            controller: 'myWorkCtrl'
        })
        .when("/",{
            template: "<p>You haven't selected an application.<br> Please select between the shopping list app or the work todo app.</p>"
        });
});
