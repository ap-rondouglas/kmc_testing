module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'sinon-chai', 'browserify'],

    files: [
      'src/**/*.js',
      'test/**/*.spec.js'
    ],

    preprocessors: {
      'src/**/*.js': ['browserify'],
      'test/**/*.spec.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            presets: 'es2015'
          }
        ], [
          'browserify-istanbul',
          {
            instrumenterConfig: {
              embedSource: true
            }
          }
        ]
      ]
    },

    coverageReporter: {
      reporters: [
        {'type': 'text'},
        {'type': 'html', dir: 'coverage'},
        {'type': 'lcov'}
      ]
    },

    reporters: ['progress', 'mocha', 'coverage'],

    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

    logLevel: config.LOG_INFO,

    //browsers: ['Chrome', 'Safari', 'Firefox', 'PhantomJS'],
    browsers: ['PhantomJS'],

    concurrency: Infinity
  })
}
