const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: '172.30.1.16',
  user: 'user',
  password: 'user',
  database: 'BookDB',
  port: 3306,
});

connection.connect();

connection.query(
  'insert into book(bookid, bookname, publisher, price) values(?,?,?,?)',
  [333, 'node.js 교과서', '길벗', 42000],
  (err, res, fields) => {
    if (err) {
      console.log('쿼리 문장에 오류가 있습니다');
      console.log(err);
    } else {
      console.log('입력이 완료.');
      console.log('--------------');
      console.log(res);
      console.log('--------------');
      console.log(fields);
    }
  }
);
app.listen(3000, () => console.log('server running... 127.0.0.1:3000'));
