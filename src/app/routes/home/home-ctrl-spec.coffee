'use strict'

describe 'module app - HomeCtrl', ->

  $scope = null
  HomeCtrl = null

  beforeEach module 'app'

  beforeEach inject ($controller, $rootScope) ->
    $scope = $rootScope.$new()
    HomeCtrl = $controller 'HomeCtrl', $scope: $scope

  it 'should be defined', ->
    expect(HomeCtrl).toBeDefined()