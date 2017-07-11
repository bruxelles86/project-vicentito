var scraper = require('table-scraper');
scraper
  .get('http://www.babynames.org.uk/french-boy-baby-names.htm')
  .then(function(tableData) {
    console.log(tableData[0])
});