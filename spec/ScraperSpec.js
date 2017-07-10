const Scraper = require('../src/Scraper.js')

describe('Scraper', function() {
   it('gets the HTML of www.babynames.org.uk/french-boy-baby-names.htm', function(done) {
      var scraper = new Scraper()
      scraper.scrape('french', function(source) {
         expect(source.includes('Adrien')).toEqual(true); 
         done();
      });
   });
   
   it('will get Spanish names instead if passed \'spanish\' as an argument', function(done) {
      var scraper = new Scraper()
      scraper.scrape('spanish', function(source) {
         expect(source.includes('Gustavo')).toEqual(true);
         done();
      });
   });
});