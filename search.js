var request = require("request");

var options = { method: 'GET',
  url: 'https://app.ticketmaster.com/discovery/v2/events.json',
  qs: { apikey: 'VO4sFNAOtZRuqAzMTCrlgS6SIieIFOGO' },
  headers: 
   { 'Postman-Token': 'e7dd4976-d45c-4ef1-9514-2450d38fbc05',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
