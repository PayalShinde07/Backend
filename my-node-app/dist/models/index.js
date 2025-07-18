"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.syncDatabase = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const basename = path_1.default.basename(__filename);
const db = {};
const env = process.env.NODE_ENV || 'development';
const dbConfig = config_1.default[env];
const sequelize = new sequelize_1.Sequelize(dbConfig);
exports.sequelize = sequelize;
// Read all model files in the current directory
fs_1.default.readdirSync(__dirname)
    .filter((file) => {
    return (file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.ts');
})
    .forEach((file) => {
    const model = require(path_1.default.join(__dirname, file))(sequelize, sequelize_1.DataTypes);
    db[model.name] = model;
});
console.log("Here is the DB Object : ", db);
// Set up associations between models
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log('Database Connection has been established successfully.');
        yield sequelize.sync({ force: false });
        console.log('Database & tables created!');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
});
exports.syncDatabase = syncDatabase;
exports.default = db;
