const Scraper = require('./Scraper.js')
const ListBuilder = require('./ListBuilder.js')
const Comparer = require('./Comparer.js')
const NameStore = require('./NameStore.js')

function Interface() {
    this.scraper = new Scraper()
    this.listBuilder = new ListBuilder()
    this.comparer = new Comparer()
    this.nameStore = new NameStore()
}

Interface.prototype.getNames = function(country1, country2) {
    Promise.all([this.scraper.scrape(country1), this.scraper.scrape(country2)]).then(namesArray => {
        
        this.nameStore.setNames1(this.listBuilder.listNames(namesArray[0]));
        this.nameStore.setNames2(this.listBuilder.listNames(namesArray[1]));
        this.nameStore.setMatchingNames(this.comparer.compare(this.nameStore.names1, this.nameStore.names2));
        this.nameStore.printMatchingNames
    });
};

module.exports = Interface;