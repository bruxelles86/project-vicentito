const Scraper = require('../src/Scraper.js')

describe('Scraper', function() {
   it('gets the HTML of www.babynames.org.uk/french-boy-baby-names.htm', function() {
      var scraper = new Scraper()
      scraper.get('french', function(source) {
         expect(source.includes('Adrien')).toEqual(true); 
      });
   });
});