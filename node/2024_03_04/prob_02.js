const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect('login.html');
});

app.post('/:name123', (req, res) => {
  const name = req.params.name123;
  const id = req.body.id;
  const pw = req.body.pw;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>로그인 페이지에서 응답한 결과</h1>');
  res.write('<hr>');
  res.write('<p>name : ' + name + ' </p>');
  res.write('<p>id : ' + id + '</p>');
  res.write('<p>pw : ' + pw + '</p>');
  res.end();
});

app.listen(3000, () => console.log('server 127.0.0.1:3000 running..'));
