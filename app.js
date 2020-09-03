'use strict';
const app = new (require('express'))();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('listen: ', port);
  }
});