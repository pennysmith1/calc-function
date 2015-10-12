/*eslint-env mocha */
var assert = require('assert');
var Calculator = require('./');
var calc;

describe('calc', function() {

    beforeEach(function () {
        calc = new Calculator();
    });

    describe('add()', function() {

        it('should be able to add 2 numbers together', function () {
            assert.equal(calc.add(1,2).equals(), 3);
        });
        
    });

    describe('power()', function() {

        it('should be able to return the power of the total', function () {
            assert.equal(calc.power(1).equals(), 0);
        });
        
    });

    describe('subtract()', function() {

        it('should be able to subtract two numbers', function () {
            assert.equal(calc.subtract(1,2).equals(), -3);
        });
        
    });

    describe('divide()', function() {

        it('should be able to divide two numbers', function () {
            assert.equal(calc.divide(1,2).equals(), 0);
        });
        
    });

    describe('multiply()', function() {

        it('should be able to multiply two numbers', function () {
            assert.equal(calc.multiply(1,2).equals(), 0);
        });
        
    });

    describe('root()', function() {

        it('should be find the root of the numbers', function () {
            assert.equal(calc.add(81).root(3, 3).equals(), 3);
        });
        
    });


    describe('abs()', function() {

        it('should return the absolute value of the number', function () {
            assert.equal(calc.subtract(10).abs().equals(), 10);
        });
        
    });

});
