/**
 * program_3.js
 * Node.js Calculator: Performs basic arithmetic operations (+, -, *, /) on two user-provided numbers.
 *
 * How it works:
 *   1. Prompts the user to enter the first number.
 *   2. Prompts the user to enter the second number.
 *   3. Prompts the user to choose an operation (+, -, *, /).
 *   4. Performs the selected operation using functions from calculator.js.
 *   5. Prints the result.
 *
 * Example output:
 *   Enter first number: 8
 *   Enter second number: 2
 *   Choose operation (+, -, *, /): /
 *   // Result: 4
 */

// calculator.js
// function add(a, b) { return a + b; }
// function subtract(a, b) { return a - b; }
// function multiply(a, b) { return a * b; }
// function divide(a, b) { return b !== 0 ? a / b : 'Cannot divide by zero'; }
// module.exports = { add, subtract, multiply, divide };

// main program
const readline = require('readline');
const calc = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (a) => {
  rl.question('Enter second number: ', (b) => {
    rl.question('Choose operation (+, -, *, /): ', (op) => {
      a = parseFloat(a);
      b = parseFloat(b);
      let result;
      switch (op) {
      case '+': result = calc.add(a, b); break;
      case '-': result = calc.subtract(a, b); break;
      case '*': result = calc.multiply(a, b); break;
      case '/': result = calc.divide(a, b); break;
      default: result = 'Invalid operation';
      }
      // Prepend "// " to the result line as a comment
      console.log(`// Result: ${result}`);
      rl.close();
    });
  });
});
