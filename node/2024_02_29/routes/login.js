const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const shaHash = crypto.createHash('sha256');
const path = require('path');
shaHash.update('0123');
let output = shaHash.digest('hex');
const info = { id: 'jimm', pw: output };
// 출력
console.log('crypto_hash : ', output);

router.get('/', (req, res) => {
  res.redirect('login');
});

router.post('/login', (req, res) => {
  const id = req.body.id;
  const pw = req.body.pw;
  let result = '';
  loginCheck(id, pw)
    ? (result = '로그인 성공')
    : (result = '아이디, 비번을 다시 확인하세요.');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>로그인 결과</h1>');
  res.write('<hr>');
  res.write('<h2>id : ' + result + '</h2>');
  res.end();
});

module.exports = router;

function loginCheck(id, pw) {
  const shaHash = crypto.createHash('sha256');
  shaHash.update(pw);
  let output = shaHash.digest('hex');

  if (id !== info.id) {
    return false;
  }

  if (output !== info.pw) {
    return false;
  }

  return true;
}
