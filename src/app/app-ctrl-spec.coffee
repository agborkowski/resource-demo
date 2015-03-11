'use strict'

describe 'app.AppCtrl', ->

  $rootScope = null
  AppCtrl = null

  beforeEach module 'app'

  beforeEach inject ($controller, _$rootScope_) ->
    $rootScope = _$rootScope_
    AppCtrl = $controller 'AppCtrl'

  it 'should be defined', ->

    expect AppCtrl
    .toBeDefined()

    expect $rootScope.version
    .toBe '0.0.0'