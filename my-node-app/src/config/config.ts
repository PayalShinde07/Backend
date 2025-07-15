import { SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

interface Config {
  development: SequelizeOptions;
  
}

const config: Config = {
  development: {
    username : process.env.DB_USER     || 'backendAdmin',
    password : process.env.DB_PASSWORD || '12345',
    database : process.env.DB_NAME     || 'CDP',
    host     : process.env.DB_HOST     || 'localhost',
    port     : parseInt(process.env.DB_PORT || '1433', 10),
    dialect  : 'mssql',
    logging  : console.log,
    pool     : {
      max     : 5,
      min     : 0,
      acquire : 30000,
      idle    : 10000,
    },
    define   : {}
  }
};
export default config;