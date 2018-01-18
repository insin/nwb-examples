module.exports = function(nwb) {
  return {
    type: 'web-app',
    webpack: {
      extra: {
        plugins: [
          new nwb.webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
          })
        ]
      }
    }
  }
}
