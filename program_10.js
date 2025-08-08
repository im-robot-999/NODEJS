/**
 * This script prompts the user for a file name, then reads the file,
 * adds a comment line ("// ") to the beginning of each line,
 * and writes the commented content back to the file (overwriting it).
 * If the file does not exist, it will be created with a single comment line.
 *
 * How it works:
 *   1. Prompts the user for a file name.
 *   2. Reads the file content (if it exists).
 *   3. Prepends "// " to each line.
 *   4. Writes the commented lines back to the file.
 *   5. Prints an example of the output.
 *
 * Example output:
 *   If the file contains:
 *     Hello, world!
 *     This is a test.
 *   After running, the file will contain:
 *     // Hello, world!
 *     // This is a test.
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter file name to comment (will create if not exists): ', (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    let lines;
    if (err && err.code === 'ENOENT') {
      // File does not exist, create with a single comment line
      lines = ['// (empty file)'];
    } else if (err) {
      console.error('Error reading file:', err.message);
      rl.close();
      return;
    } else {
      lines = data.split('\n').map(line => '// ' + line);
    }

    const commentedContent = lines.join('\n');
    fs.writeFile(fileName, commentedContent, (err) => {
      if (err) {
        console.error('Error writing file:', err.message);
      } else {
        console.log('File commented successfully!');
        console.log('Example output:\n' + commentedContent);
      }
      rl.close();
    });
  });
});
