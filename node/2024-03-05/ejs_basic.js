const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/css'));

// view 엔진 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (_, res) => res.render('basic'));

app.listen(3000, () => console.log('server running.. at 127.0.0.1:3000'));
