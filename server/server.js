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

app.listen(port, () => {
  console.log('front-stack server [:' + port + '] ' + env);
});
