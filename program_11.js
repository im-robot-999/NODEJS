// program_11.js
// Node.js HTTP Server: Returns content of requested file
// Usage: node program_11.js
// Request a file via browser or curl, e.g. http://127.0.0.1:3001/filename.txt
// Output: Returns file content to the client
//
// How it works:
//   1. Starts an HTTP server on 127.0.0.1:3001.
//   2. When a request is received, extracts the filename from the URL path.
//   3. Reads the requested file from disk.
//   4. Returns the file content as plain text, or an error if not found.
//
// Example output:
//   - Request: http://127.0.0.1:3001/hello.txt
//   - If hello.txt contains:
//       Hello, world!
//     The response will be:
//       Hello, world!
//   - If the file does not exist, the response will be:
//       File not found!

const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3001;

// Create HTTP server
const server = http.createServer((req, res) => {
  // Extract the filename from the URL path
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1); // remove leading '/'

  if (!filename) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('No file specified.');
    return;
  }

  // Read and return file content
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

// Start server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
