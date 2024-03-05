const express = require('express');
const fs = require('fs');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  if (req.cookies.auth) {
    console.log('auth is exits');
    res.sendFile(__dirname + '/public/login_success.html');
  } else {
    res.redirect('/login');
  }
});
app.post('/', (req, res) => {
  res.clearCookie('auth');
  res.send('<h1>로그아웃 완료!</h1>');
});

app.get('/login', (req, res) => {
  fs.readFile('./public/login.html', 'utf-8', (err, data) => {
    res.send(data);
  });
});
app.post('/login', (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;

  if (id === 'jimm' && pw === '1234') {
    res.cookie('auth', true);
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

app.listen(3000, () => console.log('server 127.0.0.1:3000 running... '));
