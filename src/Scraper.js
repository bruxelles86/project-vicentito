const http = require('http');

function Scraper() {
};

Scraper.prototype.scrape = function(country) {
  var promise = new Promise(function(resolve, reject) {
  var options, page;
  page = '';
  
  if(country.toUpperCase() == 'UK' || country == 'United Kingdom') {
    country = 'Great+Britain'
  } else if(country.toUpperCase() == 'US' || country.toUpperCase == 'USA' || country == 'America') {
    country = 'U.S.A.'
  }

  options = {
    'host': 'www.thomas-bayer.com',
    'path': `/restnames/namesincountry.groovy?country=${country.replace(/\s/g, "+")}`,
    'port': 80
  };

  http.get(options, function(resp) {
    resp.setEncoding('utf8');
    resp.on('data', function(chunk) {
      page += chunk;
    });
    resp.on('end', function() {
      resolve(page);
    });
  }).on("error", function(err) {
      reject(err.message);
  });
  });
  return promise
};

module.exports = Scraper;
