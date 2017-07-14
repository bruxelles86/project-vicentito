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

Writing tests as I went, I started by putting together the simplest object in the entire app - the '[Comparer](https://github.com/bruxelles86/project-vicentito/blob/master/src/Comparer.js)', which takes two lists of strings and returns a third list made up of matching strings that are present in both of them.

Next came the '[Scraper](https://github.com/bruxelles86/project-vicentito/blob/master/src/Scraper.js)', originally named this because I initially decided to make HTTP requests to regular baby name websites, then parse their HTML and extract the names. It was difficult finding websites with significant numbers of names on a single page, and those that I did find had deeply complex and confusing structures - one, for instance, storing hundreds of names in giant strings in each individual cell in a table. After some research, I found [a nice REST API](http://www.thomas-bayer.com/restnames/) that served the same data up in a cleaner XML format. 

To navigate through the data, my '[ListBuilder](https://github.com/bruxelles86/project-vicentito/blob/master/src/ListBuilder.js)' object uses the `xml2js` library, returning an array of the names from the XML it is passed.

At this stage, I was passing my Scraper the ListBuilder's 'listNames' function as a callback, in order to get the latter to run after the HTTP response data had arrived. This didn't feel too clever, and the idea of sequencing a long chain of callback functions began to look increasingly horrific. I had a dull idea that promises were the solution - I had used those emitted by Node's http.get function, but had never written my own. After a lot of reading, video-watching and experimenting, I hit on a solution that would run both API queries in parallel and (using Promise.all), after *both* have succeeded, run a series of functions with the resulting data. Perfect, et voila, my list appeared!

Known issues
-------------

Not much, except to say that while my API (http://www.thomas-bayer.com/restnames/) has great data, it is *slow, slow, slow* - sometimes a full response can take longer than a minute - and sometimes (like right now, as I write this) it's just completely offline.
