const express = require('express');
const app = express();

app.use(express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('basic');
});

app.listen(3000, () => console.log('server is running.. '));
