'use strict';

angular
    .module('app')
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {

            $stateProvider

                .state('home', {
                    url: '/',
                    templateUrl: '/app/routes/home/home.html',
                    controller: 'HomeCtrl'
                })

                .state('contact', {
                    url: '/contact',
                    templateUrl: '/app/routes/contact/contact.html',
                    controller: 'ContactCtrl'
                })

                .state('invitations', {
                    url: '/invitations',
                    templateUrl: '/app/routes/invitations/index.html',
                    controller: 'InvitationsCtrl as invitationsCtrl'
                })

                .state('invitation', {
                    url: '/invitations/{invitationId}',
                    templateUrl: '/app/routes/invitation/index.html',
                    controller: 'InvitationCtrl as invitationCtrl'
                })

                .state('login', {
                    url: '/login',
                    templateUrl: '/app/routes/login/login.html'
                });

            $urlRouterProvider.otherwise('/');
        }
    ]);