const express = require('express');
const app = express();
require('dotenv').config();

app.set('port', process.env.PORT);
app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
  res.send('<img src="/apple.jpeg" width="100%" />');
});

app.listen(app.get('port'), () => console.log('server running.'));
