const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const studyRouter = require('./routes/study');
app.use('/study', studyRouter);

app.listen(3000, () => console.log('server 127.0.0.1:3000 running...'));
