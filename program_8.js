/**
 * program_8.js
 * Node.js Script: Reads a file and prints its content as an array of lines, with each line commented.
 *
 * How it works:
 *   1. Prompts the user to enter the name of a file.
 *   2. Reads the content of the specified file.
 *   3. Splits the content into lines.
 *   4. Prepends "// " to the beginning of each line to comment it out.
 *   5. Prints the commented lines as an example output.
 *
 * Example output:
 *   If the file contains:
 *     Hello, world!
 *     This is a test.
 *   The output will be:
 *     // Hello, world!
 *     // This is a test.
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for file name to read and comment lines from
rl.question('Enter file name to read and comment lines from: ', (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
    } else {
      // Split the file into lines, prepend '// ' to each line, and join them back
      const commentedLines = data
        .split(/\r?\n/)
        .map(line => '// ' + line)
        .join('\n');

      console.log('File content with comments:\n' + commentedLines);
    }
    rl.close();
  });
});
