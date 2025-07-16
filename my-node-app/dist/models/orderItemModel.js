"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initOrderItemModel = exports.OrderItem = void 0;
const sequelize_1 = require("sequelize");
class OrderItem extends sequelize_1.Model {
    static associate(models) {
        OrderItem.belongsTo(models.Order, { foreignKey: 'orderId' });
        OrderItem.belongsTo(models.Product, { foreignKey: 'productId' });
    }
}
exports.OrderItem = OrderItem;
const initOrderItemModel = (sequelize) => {
    OrderItem.init({
        orderItemId: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orderId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'OrderItem',
        tableName: 'order_items',
        timestamps: false,
    });
};
exports.initOrderItemModel = initOrderItemModel;
