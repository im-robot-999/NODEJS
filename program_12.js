const fs = require('fs');

// Read the HTML file, add a comment line to the beginning of each line,
// and print an example of the output and how it works.
fs.readFile('college.html', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading college website file:', err.message);
  } else {
    // Split the file into lines, prepend '// ' to each line, and join them back
    const commentedLines = data
      .split('\n')
      .map(line => '// ' + line)
      .join('\n');

    // How it works:
    // - Reads the content of 'college.html'
    // - Prepends '// ' to each line to comment it out
    // - Prints the commented content as an example output

    console.log('College website file content with comments:\n' + commentedLines);
  }
});
