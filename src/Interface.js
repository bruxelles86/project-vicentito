const Scraper = require('./Scraper.js')
const ListBuilder = require('./ListBuilder.js')
const Comparer = require('./Comparer.js')

function Interface() {
    this.scraper = new Scraper()
    this.listBuilder = new ListBuilder()
    this.comparer = new Comparer()
    this.names1 = null
}

Interface.prototype.getNames = function(country1, country2) {

    
};

module.exports = Interface;