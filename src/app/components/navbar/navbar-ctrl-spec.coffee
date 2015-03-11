'use strict'

describe 'app.NavbarCtrl', ->

  $scope = null
  NavbarCtrl = null

  beforeEach module 'app'

  beforeEach inject ($controller, $rootScope) ->
    $scope = $rootScope.$new()
    NavbarCtrl = $controller 'NavbarCtrl', $scope: $scope

  it 'should be defined', ->

    expect NavbarCtrl
    .toBeDefined()

    expect NavbarCtrl.name
    .toBe 'NavbarCtrl'

    expect $scope.name
    .toBe 'NavbarCtrl'