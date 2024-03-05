const express = require('express');
const session = require('express-session');
const app = express();

app.use(
  session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: true,
    name: 'Jimmy',
    genid: () => 'zzzzzz',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 13,
    },
  })
);

app.get('/', (req, res) => {
  res.send(req.session);
});

app.listen(3000, () => console.log('server 127.0.0.1:3000 running... '));
