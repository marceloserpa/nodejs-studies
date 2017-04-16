

'use strict';

var should = require('chai').should();
var mockery = require('mockery');

describe("trying to mock internal level module", () => {

    before('init mockery', () => {
        var modAMock =  function() {
            return 'hello from MOCK[modA]';            
         };
        mockery.registerMock('./mod-a', modAMock);
        mockery.enable();
        mockery.registerAllowables(['../src/mod-c', './mod-b']);
    })

    it("should call mock of modA", () => {
        var modC = require('../src/mod-c');
        var greetings = modC();
        greetings.should.equal('hello from MOCK[modA] modB modC'); 
    })

    after('clean test settings', () => {
        mockery.deregisterAllowables(['../src/mod-c', './mod-b'])
        mockery.disable();
        mockery.deregisterAll();   
    })

})