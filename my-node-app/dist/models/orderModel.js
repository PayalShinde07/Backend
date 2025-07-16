"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initOrderModel = exports.Order = void 0;
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
    static associate(models) {
        Order.belongsTo(models.User, { foreignKey: 'userId' });
        Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
    }
}
exports.Order = Order;
const initOrderModel = (sequelize) => {
    Order.init({
        orderId: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        payMethod: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        payStatus: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        orderDate: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        },
        totalAmount: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        shippingAddress: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Order',
        tableName: 'orders',
        timestamps: false,
    });
};
exports.initOrderModel = initOrderModel;
