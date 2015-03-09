'use strict';

angular
    .module('app')
    .controller('NavbarCtrl', ['$scope', function ($scope) {
        this.name = 'NavbarCtrl';
        $scope.name = 'NavbarCtrl';
    }])
    .directive('appNavbar', () => {
        return {
            controller: 'NavbarCtrl as navbarCtrl',
            templateUrl(tElement) {
                tElement.addClass('navbar navbar-default').attr('role', 'navigation');
                return '/app/components/navbar/navbar.html'
            }
        };
    });