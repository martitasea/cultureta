const ExitOnErrorPlugin = require('exit-on-error-webpack-plugin');
const webpackConfig = require('./webpack.config')({
  test: true,
});

// eslint-disable-next-line no-undef
module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'webpack'],

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-jsdom-launcher',
      'karma-mocha-reporter'
    ],

    files: [
      { pattern: '**/*.spec.+(ts|tsx)', watched: false },
      {
        pattern: '**/!(*stories|*spec).ts',
        watched: false,
        included: false,
        served: true,
        nocache: true,
      },
    ],

    exclude: [],

    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/!(*stories).+(ts|tsx)': ['webpack', 'sourcemap']
    },
    webpack: {
      ...webpackConfig,
      plugins: [
        ...webpackConfig.plugins,
        new ExitOnErrorPlugin()
      ]
    },
    webpackServer: {
      noInfo: true,
    },
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    mochaReporter: {
      showDiff: true,
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // config.LOG_DISABLE config.LOG_ERROR config.LOG_WARN config.LOG_INFO config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['jsdom'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};
