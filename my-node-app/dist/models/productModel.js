"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Product.ts
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends sequelize_1.Model {
        static associate(models) {
            Product.hasMany(models.OrderItem, {
                foreignKey: 'productId',
                as: 'orderItems',
            });
        }
    }
    Product.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: { min: 0 },
        },
    }, {
        sequelize,
        modelName: 'Product',
        tableName: 'Products',
    });
    return Product;
};
