var express = require('express');
var app = express();

app.use('/store',function(req, res, next) {
  console.log("I'm middleware in request to /store");
  next();
})

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/store', function(req, res){
  res.send('this is store');
})

var server = app.listen(3000, 'localhost', function(){
    var host = server.address().address;
    var post = server.address().port;
    console.log('app listen to http://' + host + ':' + post);
});
