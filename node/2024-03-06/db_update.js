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

let sql = 'update book set price = ? where bookid=?';
let params = [50000, 333];

connection.query(sql, params, (err, res, fields) => {
  if (err) {
    console.log('err가 발생하였습니다.');
    console.log(err);
  } else {
    console.log('수정이 완료되었습니다.');
  }
});

app.listen(3000, () => console.log('server 127.0.0.1: 3000 running... '));
