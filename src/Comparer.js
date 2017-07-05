function Comparer() {
    this.matchingNames = []
};

Comparer.prototype.compare = function(namesList1, namesList2) {
    var matchingNames = this.matchingNames
    namesList1.forEach(function(name) {
       if(namesList2.includes(name)) {
            matchingNames.push(name)
       } 
    });
    return matchingNames
};

module.exports = Comparer;