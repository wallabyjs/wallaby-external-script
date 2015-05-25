module.exports = function () {
  return {

    files: [
      {pattern: 'bower_components/leaflet/dist/leaflet.js', instrument: false},
      {pattern: 'googleMapsApi.js', instrument: false}
    ],
    tests: [
      'test.js'
    ],

    env: {
      type: 'browser',
      params: {
        runner: '--web-security=no'
      }
    }
  };
};