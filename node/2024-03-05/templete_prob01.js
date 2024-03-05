const express = require('express');
const app = express();

app.use(express.static(__dirname + '/css'));
app.use(express.urlencoded({ extended: false }));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (_, res) => {
  res.render('info_card');
});
app.post('/', (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  res.render('info_card_result', {
    name,
    age,
  });
});

app.listen(3000, () => console.log('server 127.0.0.1:3000 running...'));
