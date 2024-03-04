const express = require('express');
const app = express();

app.get('/page/:id', (req, res) => {
  let name = req.params.id;

  res.send('<h1>' + name + ' Page</h1>');
});

app.listen(3000, () => console.log('Server 127.0.0.1:3000 running...'));
