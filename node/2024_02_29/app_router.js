const express = require('express');
const app = express();
require('dotenv').config();
app.set('port', process.env.PORT);

app.use(
  express.static(__dirname + '/public', {
    extensions: ['html', 'htm'],
  })
);
app.use(express.urlencoded({ extended: false }));

// router
const loginRouter = require('./routes/login');
app.use('/', loginRouter);

const joinRouter = require('./routes/join');
app.use('/', joinRouter);

app.listen(app.get('port'), () => console.log('server is running...'));
