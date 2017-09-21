const Interface = require('../src/Interface.js')

describe('Interface', function() {
  it('resolves with an array of names', function(done) {
    var interface = new Interface()
    interface.getNames('France', 'Germany').then(function(matches) {
      expect(Array.isArray(matches)).toBe(true);
      done();
    })
    .catch(err => console.log(err))
  }, 20000);
});
