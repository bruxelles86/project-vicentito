function NameStore() {
    this.names1 = null
    this.names2 = null
    this.matchingNames = null
};

NameStore.prototype.setNames1 = function(names) {
    this.names1 = names
}

NameStore.prototype.setNames2 = function(names) {
    this.names2 = names
}

NameStore.prototype.getNames1 = function() {
    return this.names1
}

NameStore.prototype.getNames2 = function() {
    return this.names2
}

NameStore.prototype.setMatchingNames = function(names) {
    this.matchingNames = names
}

NameStore.prototype.getMatchingNames = function() {
    return this.matchingNames
}

NameStore.prototype.printMatchingNames = function(country1, country2) {
    console.log("There are " + this.matchingNames.length + ` matching names in ${country1} and ${country2}:`)
    this.matchingNames.forEach(function(name) {
      console.log(name)
    })
}

module.exports = NameStore;
