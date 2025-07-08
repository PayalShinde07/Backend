// const greet=(name:string)=>{
//   return `Hello ${name}`;
// }

// console.log(greet("Payal"));


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
  .then((pool: any) => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch((err: any) => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};
