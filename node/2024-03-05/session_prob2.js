const express = require('express');
const session = require('express-session');
const app = express();

app.use(
  session({
    secret: 'secret key123',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  req.session.count ? (req.session.count += 1) : (req.session.count = 1);
  console.log(req.session.count);
  res.send(`<h1>${req.session.count}번째 방문입니다!</h1>`);
});

app.listen(3000, () => console.log('server 127.0.0.1:3000 running..'));
