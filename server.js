const express = require('express');
const path = require('path');
const app = express();
const fallback = require('express-history-api-fallback');

const publicPath = path.resolve(__dirname, 'build');

app.use(express.static(publicPath))

app.use(fallback('index.html', { root: publicPath }));

const port = process.env.PORT || 9000
app.listen(port, (err) => {
  if (err) throw err;
  console.log("Server Running at " + port);
});