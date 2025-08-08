/**
 * program_7.js
 * Node.js Script: Writes user-provided content to "sample.txt", then reads the file and prints each line commented out.
 *
 * How it works:
 *   1. Prompts the user to enter content.
 *   2. Writes the content to "sample.txt".
 *   3. Reads the file content.
 *   4. Prepends "// " to each line.
 *   5. Prints the commented lines as output.
 *
 * Example output:
 *   If the user enters:
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

rl.question('Enter content to write to sample.txt: ', (data) => {
  fs.writeFile('sample.txt', data, (err) => {
    if (err) {
      console.error('Error writing file:', err.message);
      rl.close();
      return;
    }
    // Read the file and print each line commented out
    fs.readFile('sample.txt', 'utf8', (err, fileData) => {
      if (err) {
        console.error('Error reading file:', err.message);
      } else {
        const commentedLines = fileData
          .split(/\r?\n/)
          .map(line => '// ' + line)
          .join('\n');
        console.log(commentedLines);
      }
      rl.close();
    });
  });
});
