// db.js
const sql = require('mssql');

const config = {
  user: 'LAPTOP-NJ5H28L3\Payal Shinde', 
  password: '1652001', 
  server: 'localhost', 
  database: 'DataBase1', 
  options: {
    encrypt: false, 
    trustServerCertificate: true 
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};
