const express = require('express');
const bootstrap = require('./bootstrap');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bootstrap(app);

app.use(function(req, res, next) {
  res.status(404).send('Not Found');
});

mongoose.connect(
  'mongodb://localhost:27017/service',
  { useNewUrlParser: true },
  function(err) {
    if (err) return console.log(err);
    app.listen(8080, function() {
      console.log('Server start on port 8080');
    });
  }
);
