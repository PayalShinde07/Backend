"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/OrderItem.ts
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class OrderItem extends sequelize_1.Model {
        static associate(models) {
            OrderItem.belongsTo(models.Order, {
                foreignKey: 'orderId',
                as: 'order',
            });
            OrderItem.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product',
            });
        }
    }
    OrderItem.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 1 },
        },
        priceAtPurchase: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
    }, {
        sequelize,
        modelName: 'OrderItem',
        tableName: 'OrderItems',
    });
    return OrderItem;
};
