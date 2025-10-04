const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker and Jenkins! 🚀');
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${5000}`);
});