const Scraper = require('../src/Scraper.js')

describe('Scraper', function() {
   it('gets the HTML of www.thomas-bayer.com/restnames', function(done) {
      var scraper = new Scraper()
      scraper.scrape('France', function(source) {
         expect(source.includes('Adrien')).toBe(true); 
         done();
      });
   });
   
   it('will get Spanish names instead if passed \'Spain\' as an argument', function(done) {
      var scraper = new Scraper()
      scraper.scrape('Spain', function(source) {
         expect(source.includes('Gustavo')).toBe(true);
         done();
      });
   });
});