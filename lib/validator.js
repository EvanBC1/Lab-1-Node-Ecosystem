'use strict';

// Vinicio - this is similar to module.exports = {};, but you are giving it an easier to use name
let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


// Ideas for rules : Positive values / Negative values / odd values / even values /

// specific values / bigger than five /

// if you need to setup more complex rules, remember that rules can be an object too
validator.isValid = (input, rules) => {
  // return true;

  if(rules === 'number') {
    // I'm checking if the value is less than zero, because the user wants to
    // check if the value is negative
    return typeof input === 'number';
  }

  if(rules === 'negative') {
    return input < 0;
  }

  if(rules === 'object') {
    // Vinicio - how do I check if the type of the input is an object
    return typeof input === 'object';

  }

};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};

validator.isNumber = (input) => {
  return typeof input === 'number';
};

validator.isArray = (input) => {
  return Array.isArray(input);
};

validator.isObject = (input) => {
  return typeof input === 'object';
};

validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};

validator.isFunction = (input) => {
  return typeof input === 'function';
};

validator.isProperties = (input) => {
  return typeof input === 'string';
};

validator.isObjectValid = (data, schema) => {
  //data is going to be an object
  //schema is going to be an object that has a property called fields
  let result = '';
  Object.keys(schema.fields).forEach(expectedProperty => {
    if (! data.hasOwnProperty(expectedProperty)) {
      result = false;
    }
    result = true;
  });
  return result
};

validator.objType = (input) => {
 // return typeof
}