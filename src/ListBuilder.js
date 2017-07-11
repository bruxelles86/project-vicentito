const parse5 = require('parse5');

function ListBuilder() {
    
};

ListBuilder.prototype.listNames = function(source) {
    const names = []
    const document = parse5.parse(source)
    const table = document.childNodes[1]
                          .childNodes[1]
                          .childNodes[0]
                          .childNodes[0]
                          .childNodes[0]
                          .childNodes[0]
                          .childNodes[7]
                          .childNodes[0]
                          .childNodes[0]
                          .childNodes[1]
                          .childNodes[1]
                          .childNodes[0]
                          .childNodes[1]
    // console.log(table.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0])
    // console.log(table.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[4].value)

    table.childNodes.forEach(function(column) {
      column.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes.forEach(function(name) {
        names.push(name.value) 
      });
    });
    console.log(names)
};

module.exports = ListBuilder;