const express = require('express');

const app = express();
app.use(express.static('css'));
app.use(express.urlencoded({ extended: false }));

const listRouter = require('./routes/list');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use('/', listRouter);

app.listen(3000, () => console.log('server is running... 127.0.0.1:3000'));
