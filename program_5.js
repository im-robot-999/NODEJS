const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter file name to read: ', (fileName) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
    } else {
      // Split the file content into lines, prepend "// " to each line, and join them back
      const commentedLines = data
        .split(/\r?\n/)
        .map(line => '// ' + line)
        .join('\n');
      console.log('File content with comments:\n' + commentedLines);
    }
    rl.close();
  });
});
