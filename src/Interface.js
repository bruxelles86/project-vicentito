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
  var _this = this
  return new Promise(function(resolve, reject) {
    Promise.all([_this.scraper.scrape(country1), _this.scraper.scrape(country2)]).then(namesArray => {
        _this.nameStore.setNames1(_this.listBuilder.listNames(namesArray[0]));
        _this.nameStore.setNames2(_this.listBuilder.listNames(namesArray[1]));
        _this.nameStore.setMatchingNames(_this.comparer.compare(_this.nameStore.getNames1(), _this.nameStore.getNames2()));
        resolve(_this.nameStore.getMatchingNames())
    })
    .catch((err) => reject(err))
  });
};

module.exports = Interface;
