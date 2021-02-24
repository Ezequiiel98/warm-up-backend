const { Sequelize } = require('sequelize');

class Database {
  constructor({
    DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, dialect = 'mysql', timestamps = false,
  }) {
    this.dbConfig = new Sequelize('default_db', DB_USER, DB_PASSWORD, {
      host: DB_HOST,
      port: DB_PORT,
      dialect,
      define: {
        timestamps,
      },
    });
  }

  init() {
    return this.dbConfig.sync()
      .then(() => console.log('database is working'))
      .catch((err) => console.log(err));
  }
}

module.exports = Database;
