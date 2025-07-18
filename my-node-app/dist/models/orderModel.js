"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends sequelize_1.Model {
        static associate(models) {
            Order.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user',
            });
            Order.hasMany(models.OrderItem, {
                foreignKey: 'orderId',
                as: 'orderItems',
            });
        }
    }
    Order.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { min: 0 },
        },
        status: {
            type: DataTypes.ENUM('pending', 'shipped', 'delivered', 'cancelled'),
            defaultValue: 'pending',
        },
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'Orders',
    });
    return Order;
};
