const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// app.use(cookieParser());
app.use(cookieParser('sign1'));

app.get('/getCookie', (req, res) => {
  res.send(req.cookies);
  // res.send(req.signedCookies.string1);
});

app.get('/setCookie', (req, res) => {
  res.cookie('string1', 'cookie!', { signed: true });
  res.cookie('json', { name: 'pop cookie', property: 'delicious' });

  res.redirect('/getCookie');
});

app.listen(3000, () => console.log('server running 127.0.0.1:3000 ...'));
