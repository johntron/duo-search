[![npm](https://img.shields.io/npm/v/duo-search.svg)](https://www.npmjs.com/package/duo-search)

# duo-search
Duo command to search Github for modules: `duo search <keyword>`

## Installation
```sh
npm install -g duo-search
```

## Usage (CLI)
```sh
duo search <keyword>
```

## Usage (API)
```JavaScript
var search = require('duo-search'),
	request = require('request');

search('something awesome', request, github_token, function (results, raw, response) {
	console.info('Results:', results);
	console.info('Response body (api.github.com):', raw);
	console.info('Response object:', response);
});
```
In a browser, wrap some AJAX library in a function compatible with (request/request)[https://github.com/request/request] and pass this as the `request` parameter.

## License

The MIT License

Copyright &copy; 2014

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
