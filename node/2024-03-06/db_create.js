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

connection.query('select * from Book', (err, res, fields) => {
  if (err) {
    console.log('쿼리 에러 발생.');
    console.log(err);
  } else {
    console.log(res);
    console.log('---------------');
    console.log(fields);
  }
});
app.listen(3000, () => console.log('server running... 127.0.0.1:3000'));
