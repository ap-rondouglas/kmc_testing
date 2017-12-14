module.exports = function(config) {
  let customBrowsers =  ['PhantomJS']; //['Chrome', 'Safari', 'Firefox', 'PhantomJS'];
  if (process.env.TRAVIS) {
    customBrowsers = ['PhantomJS'];
  }

  config.set({

    basePath: '',

    frameworks: ['mocha', 'sinon-chai', 'browserify'],

    files: [
      'src/**/*.js',
      'test/*.js'
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

    reporters: ['mocha', 'coverage'],
    
    coverageReporter: {
      reporters: [
        {'type': 'text'},
        {'type': 'html', dir: 'coverage'},
        {'type': 'lcov'}
      ]
    },

    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

    logLevel: config.LOG_INFO,

    //browsers: ['Chrome', 'Safari', 'Firefox', 'PhantomJS'],
    browsers: customBrowsers,

    concurrency: Infinity
  })
}
