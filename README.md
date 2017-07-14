# Project Vicentito

A personal project to generate lists of names that exist with identical spelling in different spoken languages. 

The idea to do this came to me while searching for my first junior dev role when two friends who were expecting a baby, a Spaniard and Frenchman, said they had chosen the name for their child, but that they wouldn't reveal it before the birth. Their only hint was that it was spelt the same in both French and Spanish...

Installation, Use & Testing
--------

* Simply fork or clone this repo, and run `npm install`
* Run `node` on the command line, and require the interface with `const Interface = require('./src/Interface')`
* Next instantiate a new interface object, and run its `getNames` function, passing the names of two countries as arguments (these must be capitalised - i.e 'Spain', not 'spain', 'Spanish' or 'spanish').
* If successful, a list of matching names will appear in the console.
* Tests can be run by running `jasmine` in the main directory

Technologies & Principles
-----------------------

* JavaScript/Node.js
* Jasmine/TDD
* HTTP requests
* Parsing XML
* Promises

My approach...
-------------

So apart from entertaining myself, I decided to undertake this little project a) because I'd just finished writing [something else](https://github.com/ffasolin/web-browser) in Node.js and wanted to do more, and b) I saw it would present opportunities for me to improve my understanding of how to deal with asynchronicity in my code.

