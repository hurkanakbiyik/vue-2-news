# vue-2-news
> A boilerplate for news

This boilerplate is based on the Vue webpack template.

## Usage
To get up and running run:
``` bash
$ npm install
$ npm run dev
```

### Config files ###
Inside the `config/*.env.js`-files, you can configure your environment variables.

## Other Usage

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

- `npm run unit`: start the Karma Test Runner.
  - Unit Tests are provided by Karma, Mocha, Chai and Sinon-Chai.
  - The testing files should be place under **test/unit/specs**.
  - Make sure every test file ends in `.spec.js`

- `npm run e2e`: start the Nightwatch Test Runner.
  - End to End (e2e) Tests are provided by Nightwatch, Selenium and PhantomJS.
  - The testing files should be place under **test/e2e/specs**.
