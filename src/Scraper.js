const http = require('http');

function Scraper() {
};

Scraper.prototype.scrape = function(country, fn) {
  var options, page;
  page = '';

  options = {
    'host': 'www.thomas-bayer.com',
    'path': `/restnames/namesincountry.groovy?country=${country}`,
    'port': 80
  };
  

  http.get(options, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
      page += chunk;
    });
    resp.on('end', function() {
       fn(page);
    });
  }).on("error", function(err) {
    console.log(`Got error: ${err.message}`);
  });
};

module.exports = Scraper;