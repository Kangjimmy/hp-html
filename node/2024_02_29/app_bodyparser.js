const express = require('express');
const app = express();

app.set('port', 3000);

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

app.use((req, res) => {
  const id = req.body.id;
  const pwd = req.body.pwd;

  res.send('<h1> id : ' + id + '<br/> pwd : ' + pwd + '</h1>');
});

app.listen(app.get('port'), () =>
  console.log('server 127.0.0.1:3000 running...')
);
