var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/05bdyfat', function(req, res) {
  res.send('Path: /05bdyfat');
};

router.get('/hometomuscle', function(req, res) {
  res.send('Path: /hometomuscle');
};

router.get('/cutandripped', function(req, res) {
  res.send('Path: /cutandripped');
};

module.exports = router;
