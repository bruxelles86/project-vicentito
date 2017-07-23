const Interface = require('../src/Interface.js')

describe('Interface', function() {
   it('returns an array', function(done) {
      var interface = new Interface()
      interface.getNames('France', 'Spain', function(matchingNames) {
      expect(Array.isArray(matchingNames)).toBe(true);
      done();
      });
   }, 20000);
});
