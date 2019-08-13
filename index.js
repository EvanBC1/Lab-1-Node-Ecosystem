'use strict';

const validator = require('./lib/validator');


// Vinicio - add some code here to be able to use the module using console.log

console.log('I am going to test if a value is a number');
console.log(validator.isValid(123123, 'number'));
console.log(validator.isValid('I am a number', 'number'));
console.log(validator.isValid(-123, 'number'));

console.log('I am going to test if a value is negative');
console.log(validator.isValid(-1, 'negative'));
console.log(validator.isValid(32, 'negative'));
console.log(validator.isValid(-.014, 'negative'));

console.log('I am going to test if a value is an object');
console.log(validator.isValid({a: 1}, 'object'));
console.log(validator.isValid('{a: 1}', 'object'));
console.log(validator.isValid(-.014, 'object'));