const Interface = require('../src/Interface.js')

describe('Interface', function() {
   it('returns an array', function(done) {
      var interface = new Interface()
      // expect(Array.isArray(interface.getNames('France', 'Spain'))).toBe(true)
      interface.getNames('France', 'Spain', function(matchingNames) {
      expect(Array.isArray(matchingNames)).toBe(true);
      done();
      });
   }, 240000);
   
   // it('returns an array containing strings', function(done) {
   //    var interface = new Interface()
   //    expect(interface.getNames('France', 'Spain')[0]).toEqual(jasmine.any(String))
   //    done();
   // }, 240000)
});
