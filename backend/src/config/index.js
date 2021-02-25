const Database = require('./database');

const enviroment = require('./enviroment');

module.exports = {
  database: new Database(enviroment),
  enviroment,
};
