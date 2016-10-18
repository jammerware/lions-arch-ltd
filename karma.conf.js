module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'commonjs'],
    plugins: [
      require('karma-jasmine'),
      require('karma-commonjs'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-htmlfile-reporter')
    ],

    files: [
      // angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      'node_modules/systemjs/dist/system.src.js',
      'systemjs.config.js',

      // actual tests?
      'tests/**/*.js'
    ],
//'**/*.js': ['commonjs']
    preprocessors: {

    },

    reporters: ['progress', 'kjhtml'],

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}