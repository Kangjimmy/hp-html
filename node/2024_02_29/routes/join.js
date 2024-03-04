const express = require('express');
const router = express.Router();

router.post('/join', (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  const pwCheck = req.body.pwCheck;
  const region = req.body.region;

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>가입 결과</h1>');
  res.write('<hr>');
  res.write('<h2>id : ' + id + '</h2>');
  res.write('<h2>pw : ' + pw + '</h2>');
  res.write('<h2>pwCheck : ' + pwCheck + '</h2>');
  res.write('<h2>region : ' + region + '</h2>');
  res.end();
});

module.exports = router;
