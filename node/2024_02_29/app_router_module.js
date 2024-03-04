const express = require('express');
const app = express();

app.set('port', 3000);

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.use('/index', indexRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => console.log('server is running .. '));
