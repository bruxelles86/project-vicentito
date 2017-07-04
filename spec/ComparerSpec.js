const Comparer = require('../src/Comparer.js')

describe('Comparer', function() {
   it('takes lists of names and returns a list of matching names', function() {
      var FrenchNames = ['Pierre', 'Emmanuel', 'Justin', 'Nicolas']
      var SpanishNames = ['Gonzalo', 'Anselmo', 'Nicolas', 'Jaime']
      var comparer = new Comparer()
      expect(comparer.compare(FrenchNames, SpanishNames)).toEqual(['Nicolas'])
   });
});