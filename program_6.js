/**
 * program_6.js
 * Node.js Script: Prepends "// " to every line of a user-specified file, in-place.
 *
 * How it works:
 *   1. Prompts the user to enter the name of a file.
 *   2. Reads the file content.
 *   3. Prepends "// " to each line.
 *   4. Writes the modified content back to the same file.
 *   5. Prints a success message.
 *
 * Example output:
 *   If the file "hello.txt" contains:
 *     Hello, world!
 *     This is a test.
 *   After running the script, "hello.txt" will contain:
 *     // Hello, world!
 *     // This is a test.
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter file name to comment: ', (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      rl.close();
      return;
    }
    const commented = data
      .split(/\r?\n/)
      .map(line => '// ' + line)
      .join('\n');
    fs.writeFile(fileName, commented, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err.message);
      } else {
        console.log('All lines commented successfully!');
      }
      rl.close();
    });
  });
});
