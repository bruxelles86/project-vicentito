const http = require('http');

function Scraper() {
};

Scraper.prototype.scrape = function(country) {
  var promise = new Promise(function(resolve, reject) {
  var options, page;
  page = '';

  options = {
    'host': 'www.thomas-bayer.com',
    'path': `/restnames/namesincountry.groovy?country=${country.charAt(0).toUpperCase() + country.slice(1)}`,
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
