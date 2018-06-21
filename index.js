const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/mailForm', (req, res) => res.render('pages/mailForm'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



