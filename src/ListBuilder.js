var parseString = require('xml2js').parseString;

function ListBuilder() {
    
};

ListBuilder.prototype.listNames = function(source) {
    var names = []
    var xml = source
    parseString(xml, {charkey: 'textContent'}, function (err, result) {
        result.restnames.nameinfo[0].name.forEach(function(name) {
           names.push((name['textContent']))
        });
    });
    return names
}

module.exports = ListBuilder;