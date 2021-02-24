const cors = require('cors');
const express = require('express');

// modules
const { enviroment, database } = require('./config');

// app
const app = express();

if (enviroment.ENV_IS_DEV) {
  const dotenv = require('dotenv');
  const morgan = require('morgan');
  console.log('pepardo');
  dotenv.config();
  app.use(morgan('dev'));
}

// init db
database.init();

// app config
app.use(cors());
app.use(express.json());

app.listen(enviroment.PORT_APP, () => {
  console.log(`Server on port ${enviroment.PORT_APP}`);
});
