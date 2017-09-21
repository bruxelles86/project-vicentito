const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const Interface = require('./src/Interface.js')
var interface = new Interface();

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.listen(3000, function() {  console.log('listening on 3000')
})

app.get('/', function(req, res) {
  res.render('index.ejs')
})

app.post('/matches', function(req, res) {
  var country1 = req.body.country1
  var country2 = req.body.country2
  interface.getNames(country1, country2).then(function(matches) {
    res.render('index.ejs', { names: JSON.stringify(matches.sort()), country1: country1, country2: country2 })
  })
  .catch(err => console.log(err))
})

module.exports = app;
