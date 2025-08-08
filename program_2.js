/**
 * program_2.js
 * Node.js Script: Prints the multiplication table for a user-provided number, with each line commented out.
 *
 * How it works:
 *   1. Prompts the user to enter a number.
 *   2. Prints the multiplication table for that number from 1 to 10.
 *   3. Each line of the table is prepended with "// " to comment it out.
 *
 * Example output:
 *   If the user enters 5, the output will be:
 *     // Multiplication Table for 5
 *     // 5 x 1 = 5
 *     // 5 x 2 = 10
 *     // 5 x 3 = 15
 *     // 5 x 4 = 20
 *     // 5 x 5 = 25
 *     // 5 x 6 = 30
 *     // 5 x 7 = 35
 *     // 5 x 8 = 40
 *     // 5 x 9 = 45
 *     // 5 x 10 = 50
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number for multiplication table: ', (num) => {
  num = parseInt(num);
  const lines = [];
  lines.push(`Multiplication Table for ${num}`);
  for (let i = 1; i <= 10; i++) {
    lines.push(`${num} x ${i} = ${num * i}`);
  }
  // Prepend "// " to each line and print
  const commentedLines = lines.map(line => '// ' + line).join('\n');
  console.log(commentedLines);
  rl.close();
});
