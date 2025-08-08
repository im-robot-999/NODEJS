/**
 * program_4.js
 * Node.js Script: Writes user-provided data to a file, then prints the file content with each line commented out.
 *
 * How it works:
 *   1. Prompts the user to enter the name of a file.
 *   2. Prompts the user to enter data to write to the file.
 *   3. Writes the data to the specified file.
 *   4. Reads the file content, splits it into lines, and prepends "// " to each line.
 *   5. Prints the commented lines as output.
 *
 * Example output:
 *   If the user enters:
 *     File name: hello.txt
 *     Data: Hello, world!\nThis is a test.
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

rl.question('Enter file name: ', (fileName) => {
  rl.question('Enter data to write: ', (data) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing file:', err.message);
        rl.close();
        return;
      }
      // Read the file and print each line commented out
      fs.readFile(fileName, 'utf8', (err, fileData) => {
        if (err) {
          console.error('Error reading file:', err.message);
        } else {
          const commentedLines = fileData
            .split(/\r?\n/)
            .map(line => '// ' + line)
            .join('\n');
          console.log('File content with comments:\n' + commentedLines);
        }
        rl.close();
      });
    });
  });
});
