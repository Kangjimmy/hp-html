const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Index Page</h1>');
});

app.get('*', (req, res) => {
  res.status(404).send('<h1>ERROR-page Not Found</h1>');
});

app.listen(3000, () => console.log('server 127.0.0.1:3000 running.,,'));
