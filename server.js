const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const Interface = require('./src/Interface.js')

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.listen(port, function() {  console.log(`listening on port ${port}`)
})

app.get('/', function(req, res) {
  res.render('index.ejs')
})

app.post('/matches', function(req, res) {
  var interface = new Interface();
  var country1 = req.body.country1.charAt(0).toUpperCase() + req.body.country1.slice(1)
  var country2 = req.body.country2.charAt(0).toUpperCase() + req.body.country2.slice(1)
  interface.getNames(country1, country2).then(function(matches) {
    res.render('index.ejs', { names: JSON.stringify(matches.sort()), country1: country1, country2: country2 })
  })
  .catch(function(err) {
    console.log(err)
  });
})

module.exports = app;
