const express = require('express');
const app = express();
require('dotenv').config();
app.set('port', process.env.PORT);

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.redirect('a');
});

app.get('/a', (req, res) => {
  res.send('<a href="/b">Go to B</a>');
});
app.get('/b', (req, res) => {
  res.send('<a href="/a">Go to A</a>');
});

app.listen(app.get('port'), () => console.log('server running.. '));
