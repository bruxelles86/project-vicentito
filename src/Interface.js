const Scraper = require('./Scraper.js')
const ListBuilder = require('./ListBuilder.js')

var scraper = new Scraper()
var listBuilder = new ListBuilder()
scraper.scrape('french', listBuilder.listNames)
