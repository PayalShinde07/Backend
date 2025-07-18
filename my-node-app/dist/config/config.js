"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    development: {
        username: process.env.DB_USER || 'backendAdmin',
        password: process.env.DB_PASSWORD || '12345',
        database: process.env.DB_NAME || 'CDP',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '1433', 10),
        dialect: 'mssql',
        logging: console.log,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        define: {}
    },
    test: {
        username: process.env.TESTDB_USER || 'backendAdmin',
        password: process.env.TESTDB_PASSWORD || '12345',
        database: process.env.TESTDB_NAME || 'CDP',
        host: process.env.TESTDB_HOST || 'localhost',
        port: parseInt(process.env.TESTDB_PORT || '1433', 10),
        dialect: 'mssql',
        logging: console.log,
        pool: {
            max: 5,
        }
    },
    production: {
        username: process.env.PRODDB_USER || 'backendAdmin',
        password: process.env.PRODDB_PASSWORD || '12345',
        database: process.env.PRODDB_NAME || 'CDP',
        host: process.env.PRODDB_HOST || 'localhost',
        port: parseInt(process.env.PRODDB_PORT || '1433', 10),
        dialect: 'mssql',
        logging: console.log,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        define: {}
    }
};
exports.default = config;
