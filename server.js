var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.jsonp({
      user: {
        fullName: 'Kevin McCartney',
        username: 'kevinmccartney',
        avatar: 'http://kevinmccartney.is/react-workshop-api/assets/avatar.jpg'
      },
      message: "Mixtape sriracha brunch, artisan kogi salvia asymmetrical organic. Artisan thundercats pinterest, knausgaard street art lumbersexual sustainable shabby chic food truck scenester tacos banh mi franzen tote bag."
    });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/react-workshop-api', router);

app.use('/react-workshop-api/assets', express.static('assets'));

app.listen(port);
console.log('Server running on port ' + port);
