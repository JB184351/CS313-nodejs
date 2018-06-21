var express = require('express');
var app = express();
var url = require('url');

app.set('port', (process.env.PORT || 8080));

//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/getRate', function(request, response) {
	
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});