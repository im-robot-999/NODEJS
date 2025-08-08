/**
 * program_1.js
 * Node.js HTTP Server: Returns content of requested file with each line commented out.
 *
 * How it works:
 *   1. Starts an HTTP server on 127.0.0.1:3000.
 *   2. When a request is received, extracts the filename from the URL path.
 *   3. Reads the requested file from disk.
 *   4. Prepends "// " to the beginning of each line to comment it out.
 *   5. Returns the commented file content as plain text, or an error if not found.
 *
 * Example output:
 *   - Request: http://127.0.0.1:3000/hello.txt
 *   - If hello.txt contains:
 *       Hello, world!
 *       This is a test.
 *     The response will be:
 *       // Hello, world!
 *       // This is a test.
 *   - If the file does not exist, the response will be:
 *       File not found!
 */

const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Extract the filename from the URL path
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1); // remove leading '/'

  if (!filename) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('No file specified.');
    return;
  }

  // Read and return file content with each line commented
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('File not found!');
    } else {
      // Split the file into lines, prepend '// ' to each line, and join them back
      const commentedLines = data
        .split(/\r?\n/)
        .map(line => '// ' + line)
        .join('\n');
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(commentedLines);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
