const fs = require('fs');

// Read the HTML file, add a comment line to the beginning of each line,
// and print an example of the output and how it works.
fs.readFile('product_demo.html', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading product demo HTML page:', err.message);
  } else {
    // Split the file into lines, prepend '// ' to each line, and join them back
    const commentedLines = data
      .split('\n')
      .map(line => '// ' + line)
      .join('\n');

    // How it works:
    //   1. Reads 'product_demo.html' as text.
    //   2. Splits the content into lines.
    //   3. Adds '// ' at the start of each line.
    //   4. Joins the lines back and prints the result.

    // Example output:
    //   If product_demo.html contains:
    //     <html>
    //     <body>
    //     Hello World!
    //     </body>
    //     </html>
    //   The output will be:
    //     // <html>
    //     // <body>
    //     // Hello World!
    //     // </body>
    //     // </html>

    console.log('Product demo HTML page content with comments:\n' + commentedLines);
  }
});
