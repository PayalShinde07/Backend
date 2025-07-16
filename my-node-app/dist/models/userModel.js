"use strict";
// Model: Base class from Sequelize to define your model.
// DataTypes: An object with Sequelize data types like STRING, INTEGER, TEXT, etc.
// Sequelize: The main Sequelize instance type used to connect and initialize models.
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUserModel = exports.User = void 0;
const sequelize_1 = require("sequelize");
// creates a Sequelize model class named User that extends the base Model class 
// Define the User Class
// These are TypeScript declarations, not actual database definitions
class User extends sequelize_1.Model {
    // public makes them accessible across the app
    // Define Associations
    static associate(models) {
        User.hasMany(models.Order, {
            foreignKey: 'userId',
            as: 'orders',
        });
    }
}
exports.User = User;
const initUserModel = (sequelize) => {
    User.init({
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        phone: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        address: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false,
    });
};
exports.initUserModel = initUserModel;
