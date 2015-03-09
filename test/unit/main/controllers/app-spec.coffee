'use strict';

describe 'app.main.AppCtrl', ->
  $rootScope = null
  ctrl = null

  beforeEach module 'app.main'
  beforeEach inject (_$rootScope_, $controller) ->
    $rootScope = _$rootScope_
    ctrl = $controller 'AppCtrl'

  it 'should be defined', ->

    expect ctrl
    .toBeDefined()

  it 'should set proper fields in $rootScope', ->

    expect $rootScope.version
    .toBe '0.0.0'
