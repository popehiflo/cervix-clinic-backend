const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, response to GET request /');
});

app.listen(8080, () => {
  console.log('Cervix Clinic Backend Server is running on port 8080');
});
