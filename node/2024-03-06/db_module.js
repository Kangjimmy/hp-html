const express = require('express');
const mysql = require('./routes/mysqlconn');

const app = express();

mysql.connect();

app.listen(3000, () => console.log('server is running... 127.0.0.1:3000'));
