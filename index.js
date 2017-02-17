const presets = [
  require.resolve('babel-preset-react'),
  require.resolve('babel-preset-stage-2'),
  [require.resolve('babel-preset-env'), {
    targets: {
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    },
    modules: false
  }]
]

const plugins = [
  require.resolve('babel-plugin-transform-class-properties'),
  require.resolve('babel-plugin-transform-decorators-legacy')
]

const env = process.env.BABEL_ENV || process.env.NODE_ENV
if (env === 'development')
  plugins.push(require.resolve('react-hot-loader/babel'))

module.exports = {
  presets, plugins
}