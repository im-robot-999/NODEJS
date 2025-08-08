/**
 * This script prompts the user to enter a URL with a query string,
 * parses the URL, and logs the query parameters as an object.
 *
 * Example usage:
 *   node program_14.js
 *   > Enter a URL with query string: https://example.com/page?foo=bar&baz=qux
 *   Query string: { foo: 'bar', baz: 'qux' }
 */

const readline = require('readline');
const url = require('url');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL with query string: ', (inputUrl) => {
  // Parse the input URL and extract the query parameters as an object
  const parsedUrl = url.parse(inputUrl, true);
  // Output the query parameters
  console.log('Query string:', parsedUrl.query);
  rl.close();
});
