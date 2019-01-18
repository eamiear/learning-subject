module.exports = {
  extends: [
    './lib/ua'
  ].map(require.resolve),
  printMsg: function() {
    console.log('This is a demo for publishing npm package')
  }
}