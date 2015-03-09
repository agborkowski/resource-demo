'use strict'

describe 'module app - ContactCtrl', ->

  $scope = null
  ContactCtrl = null

  beforeEach module 'app'

  beforeEach inject ($controller, $rootScope) ->
    $scope = $rootScope.$new()
    ContactCtrl = $controller 'ContactCtrl', $scope: $scope

  it 'should be defined', ->
    expect(ContactCtrl).toBeDefined()