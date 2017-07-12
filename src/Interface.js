const Scraper = require('./Scraper.js')
const ListBuilder = require('./ListBuilder.js')
const Comparer = require('./Comparer.js')

var scraper = new Scraper()
var listBuilder = new ListBuilder()
var comparer = new Comparer()

var SpanishNames = scraper.scrape('Spain', listBuilder.listNames)
var FrenchNames = scraper.scrape('France', listBuilder.listNames)

comparer.compare(SpanishNames, FrenchNames)