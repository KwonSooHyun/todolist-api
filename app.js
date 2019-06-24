const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { sequelize } = require('./models');

const routes = require('./routes');

const app = express();
sequelize.sync();

app.use(cors());
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// app.use((req, res) => res.status(404).send('404 Error!'));

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3333, () => {
  console.log('3333번 포트 실행');
});

module.exports = app;
