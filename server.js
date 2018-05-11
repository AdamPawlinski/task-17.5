var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function(req, res) {
    res.sendFile('./assets/index.html');
});

app.get('/userform', function(req, res){
  var response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  res.end(JSON.stringify(response));
});

var server = app.listen(3000, 'localhost', function(){
    var host = server.address().address;
    var post = server.address().port;
    console.log('app listen to http://' + host + ':' + post);
});
