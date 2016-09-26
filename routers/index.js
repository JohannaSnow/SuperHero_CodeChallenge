/* Index router - serves the index.html page. */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  var indexFile = path.join(__dirname, '../public/index.html');
  res.sendFile(indexFile);
});

module.exports = router;
