const express = require('express');
const app = express();

app.use(express.static(__dirname + '/css'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const contactsRouter = require('./routes/contacts');

app.use('/', contactsRouter);

app.listen(3000, () => console.log('server 127.0.0.1:3000 running... '));
