const cors = require('cors');
const express = require('express');

// modules
const { enviroment, database } = require('./config');

// models
const { Post, Category } = require('./models');

// app
const app = express();

if (enviroment.ENV_IS_DEV) {
  const dotenv = require('dotenv');
  const morgan = require('morgan');

  dotenv.config();
  app.use(morgan('dev'));
}

// init db
database.init();

// app config
app.use(cors());
app.use(express.json());

const test = require('./controllers/index');

app.use('/test', test);

app.listen(enviroment.PORT_APP, () => {
  console.log(`Server on port ${enviroment.PORT_APP}`);
});
