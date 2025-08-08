/**
 * calculator.js
 * Basic Calculator Module: Provides functions for addition, subtraction, multiplication, and division.
 *
 * How it works:
 *   1. Each function takes two numeric arguments.
 *   2. Performs the corresponding arithmetic operation.
 *   3. The divide function checks for division by zero and returns an error message if so.
 *
 * Example output:
 *   add(2, 3);        // 5
 *   subtract(5, 2);   // 3
 *   multiply(4, 6);   // 24
 *   divide(10, 2);    // 5
 *   divide(10, 0);    // 'Cannot divide by zero'
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * Returns an error message if dividing by zero.
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
function divide(a, b) {
  return b !== 0 ? a / b : 'Cannot divide by zero';
}

module.exports = { add, subtract, multiply, divide };
