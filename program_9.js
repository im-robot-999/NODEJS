/**
 * program_9.js
 * Node.js Script: Reads an HTML file and prints its content, with each line commented.
 *
 * How it works:
 *   1. Prompts the user to enter the name of an HTML file.
 *   2. Reads the content of the specified file.
 *   3. Prepends "// " to the beginning of each line to comment it out.
 *   4. Prints the commented content as an example output.
 *
 * Example output:
 *   If the HTML file contains:
 *     <html>
 *     <body>
 *     Hello, world!
 *     </body>
 *     </html>
 *   The output will be:
 *     // <html>
 *     // <body>
 *     // Hello, world!
 *     // </body>
 *     // </html>
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for HTML file name to read and comment
rl.question('Enter HTML file name to read and comment: ', (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading HTML file:', err.message);
    } else {
      // Split the file into lines, prepend '// ' to each line, and join them back
      const commentedLines = data
        .split('\n')
        .map(line => '// ' + line)
        .join('\n');

      console.log('HTML file content with comments:\n' + commentedLines);
    }
    rl.close();
  });
});
