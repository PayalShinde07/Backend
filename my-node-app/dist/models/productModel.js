"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initProductModel = exports.Product = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
    static associate(models) {
        Product.hasMany(models.OrderItem, { foreignKey: 'productId' });
    }
}
exports.Product = Product;
const initProductModel = (sequelize) => {
    Product.init({
        productId: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        brand: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        productDesc: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        Category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        productPrice: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Qty: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Product',
        tableName: 'products',
        timestamps: false,
    });
};
exports.initProductModel = initProductModel;
