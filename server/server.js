const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3010;

app.use(morgan());
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const users = [];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const body = req.body;
  const user = _.extend(body, { id: _.uniqueId('user_') });

  users.push(user);

  res.json(user);
});

app.listen(port, () => {
  console.log('front-stack server [:' + port + '] ' + env);
});
