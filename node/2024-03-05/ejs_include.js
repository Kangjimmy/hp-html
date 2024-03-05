const express = require('express');
const app = express();

app.use(express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('main', {
    title: 'EJS 타이틀임당',
  });
});

app.listen(3000, () => console.log('server is running... '));
