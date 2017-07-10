const http = require('http');

function Scraper() {
};

Scraper.prototype.scrape = function(language, fn) {
  var options, page;
  page = '';

  options = {
    'host': 'www.babynames.org.uk',
    'path': `/${language}-boy-baby-names.htm`,
    'port': 80
  };
  

  http.get(options, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
      page += chunk;
    });
    resp.on('end', function() {
      console.log(page)
      fn(page);
    });
  }).on("error", function(err) {
    console.log(`Got error: ${err.message}`);
  });
};

module.exports = Scraper;