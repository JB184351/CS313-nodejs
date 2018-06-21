const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

var num1 = parseInt(process.argv[2]);
var op = process.argv[3];
var num2 = parseInt(process.argv[4]);
var result;


app.get('/math', function (req, res) {
  result = eval(num1 + op + num2);
  res.render('pages/index', {});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

/*express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

*/

