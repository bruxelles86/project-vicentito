const ListBuilder = require('../src/ListBuilder.js')

describe('ListBuilder', function() {
  it('builds a list of names from a babynames.org.uk HTML document', function(done) {
      var listBuilder = new ListBuilder();
      expect(listBuilder.listNames(html).includes('Nicolas')).toBe(true)
  });
});