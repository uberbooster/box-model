var express = require('express');

var server = express();

var port = process.env.PORT || 8080;

//These are our power ups
server.use(express.static(__dirname+'/public'));


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/goal', function(request, response){
  response.sendFile('public/images/box-model.png', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port...'+port);
});
