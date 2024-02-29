const express = require('express');
const app = express();
require('dotenv').config();
app.set('port', process.env.PORT);

// 모듈 추출
const crypto = require('crypto');
// 해시 생성
const shaHash = crypto.createHash('sha256');
shaHash.update('0123');
let output = shaHash.digest('hex');
// 출력
console.log('crypto_hash : ', output);
const info = { id: 'jimm', pw: output };

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.redirect('login.html');
});

app.post('/login.html', (req, res) => {
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

app.post('/join.html', (req, res) => {
  const id = req.body.id;
  const pw = req.body.pwd;
  const pwCheck = req.body.pwdCheck;
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

app.listen(app.get('port'), () => console.log('server is running...'));

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
