const express = require('express');
const session = require('express-session');
const app = express();

app.use(
  session({
    secret: 'jimm key',
    resave: false, // 정보가 바뀔때만 세션을 변경하도록
    saveUninitialized: false, // 값이 initailize 될때만 저장하도록
    cookie: {
      // 변경사항.
      maxAge: 60 * 60 * 1000,
    },
  })
);

app.get('/', (req, res) => {
  // req.session.nowDate = new Date().toString();
  // req.session.nowDate2 = new Date();
  // req.session.test = 'wowwowowow';

  res.send(req.session);
});

app.listen(3000, () => console.log('server 127.0.0.1:3000 running..'));
