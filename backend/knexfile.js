// Update with your config settings.
require('dotenv').config()

module.exports = {
    development: {
      client: 'mysql',
      debug: true,
      connection: {
        host : process.env.MYSQL_CLOUD_HOST,
        port : 3306,
        user : process.env.MYSQL_CLOUD_USER,
        password : process.env.MYSQL_CLOUD_PASS,
        insecureAuth: true,
        database : process.env.MYSQL_DB
      }
    }
  };