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

NameStore.prototype.setMatchingNames = function (names) {
    this.matchingNames = names
}


NameStore.prototype.printMatchingNames = function() {
    console.log(this.matchingNames)
}

module.exports = NameStore;