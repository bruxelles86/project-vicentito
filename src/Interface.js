const Scraper = require('./Scraper.js')
const ListBuilder = require('./ListBuilder.js')
const Comparer = require('./Comparer.js')

function Interface() {
    this.scraper = new Scraper()
    this.listBuilder = new ListBuilder()
    this.comparer = new Comparer()
    this.names1 = null
    this.names2 = null
    this.matchingNames = null
}

Interface.prototype.getNames = function(country1, country2) {
    Promise.all([this.scraper.scrape(country1), this.scraper.scrape(country2)]).then(namesArray => {
        this.names1 = this.listBuilder.listNames(namesArray[0]);
        this.names2 = this.listBuilder.listNames(namesArray[1]);
        this.matchingNames = this.comparer.compare(this.names1, this.names2)
        console.log(this.matchingNames)
        return this.matchingNames
    });
};

module.exports = Interface;