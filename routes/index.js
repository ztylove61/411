var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

var request = require("request");

var x = "queen";

var options = { method: 'GET',
  url: 'https://app.ticketmaster.com/discovery/v2/events.json',
  qs: { keyword: x, apikey: 'VO4sFNAOtZRuqAzMTCrlgS6SIieIFOGO' },
  headers:
      { 'Postman-Token': 'b9d317df-22cb-4b5d-8fad-73f23965de1e',
        'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

