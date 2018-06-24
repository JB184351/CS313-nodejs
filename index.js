const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => res.render('pages/mailForm'))
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  app.get('/getRate', (req, res) => {

	let rate = getRate(req.query.name, res.query.value);

	var postage = {name: req.query.name, weight: req.query.value, rate: rate };
	//var myJSON = JSON.stringify(postage);

	res.render('pages/rates', postage);

  });

  function getRate(name, value){

  	if(req.query.name = 'Stamped'){
  		rate = res.query.value;
  	}

  	else if(req.query.name = 'Metered'){
  		rate = res.query.value;
  	}

  	else if(req.query.name = 'Envelopes'){
  		rate = res.query.value;
  	}

  	else if(req.query.name = 'First-Class'){
  		rate = res.query.value;
  	}

  }

