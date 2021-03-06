const Scraper = require('../src/Scraper.js')

describe('Scraper', function() {
   it('gets the HTML of www.thomas-bayer.com/restnames', function(done) {
      var scraper = new Scraper()
      scraper.scrape('France').then(function(source) {
         expect(source.includes('Adrien')).toBe(true)
         done();
      })
      .catch(err => console.log(err))
   }, 20000);
   
   it('will get Spanish names instead if passed \'Spain\' as an argument', function(done) {
      var scraper = new Scraper()
      scraper.scrape('Spain').then(function(source) {
         expect(source.includes('Gustavo')).toBe(true)
         done();
      })
      .catch(err => console.log(err))
   }, 20000);
   
   it('will get British names', function(done) {
      var scraper = new Scraper()
      scraper.scrape('Great Britain').then(function(source) {
         expect(source.includes('James')).toBe(true)
         done();
      })
      .catch(err => console.log(err))
   }, 20000);
});