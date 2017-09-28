function Comparer() {
    this.matchingNames = []
};

Comparer.prototype.compare = function(namesList1, namesList2) {
    return namesList1.filter(function(name) {
        return namesList2.includes(name)
    })
};

module.exports = Comparer;