const express = require('express');
const app = express();

app.use(express.static(__dirname + '/css'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('data', {
    name: 'Jimmy',
    description: 'hi my name is ejs!!',
  });
});

app.listen(3000, () => console.log('server is running..'));
