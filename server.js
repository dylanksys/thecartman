var express = require ('express');

var thecut = require('../routers/thecut');

var app = express();

app.use('/', thecut);

app.listen(9000, function () {
  console.log('buffcartman listening on port 9000');
};
