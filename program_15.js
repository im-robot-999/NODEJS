/**
 * This script prompts the user to enter a URL with a query string,
 * then parses and displays each key-value pair from the query string.
 *
 * Example input:
 *   https://example.com/page?name=John&age=30
 *
 * Example output:
 *   Query string key-value pairs:
 *   name: John
 *   age: 30
 *
 * How it works:
 *   1. Prompts user for a URL.
 *   2. Parses the URL and extracts the query string.
 *   3. Splits the query string into key-value pairs.
 *   4. Prints each key and value.
 */

const readline = require('readline');
const url = require('url');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL with query string: ', (inputUrl) => {
  const parsedUrl = url.parse(inputUrl);
  const queryString = parsedUrl.query;
  if (!queryString) {
    console.log('No query string found.');
    rl.close();
    return;
  }
  const pairs = queryString.split('&').map(pair => pair.split('='));
  console.log('Query string key-value pairs:');
  pairs.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  rl.close();
});
