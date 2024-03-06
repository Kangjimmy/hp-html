const mysql = require('mysql2');

// connection 객체 생성
const connection = mysql.createConnection({
  host: '172.30.1.16',
  user: 'user',
  password: 'user',
  database: 'BookDB',
  port: 3306,
});

module.exports = connection;
