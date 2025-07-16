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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDatabase = exports.OrderItem = exports.Order = exports.Product = exports.User = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const userModel_1 = require("../models/userModel");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return userModel_1.User; } });
const productModel_1 = require("../models/productModel");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return productModel_1.Product; } });
const orderModel_1 = require("../models/orderModel");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return orderModel_1.Order; } });
const orderItemModel_1 = require("../models/orderItemModel");
Object.defineProperty(exports, "OrderItem", { enumerable: true, get: function () { return orderItemModel_1.OrderItem; } });
const env = process.env.NODE_ENV || 'development';
const dbConfig = config_1.default[env];
const sequelize = new sequelize_1.Sequelize(dbConfig);
exports.sequelize = sequelize;
// Initialize models
(0, userModel_1.initUserModel)(sequelize);
(0, productModel_1.initProductModel)(sequelize);
(0, orderModel_1.initOrderModel)(sequelize);
(0, orderItemModel_1.initOrderItemModel)(sequelize);
// Associate models
(_a = userModel_1.User.associate) === null || _a === void 0 ? void 0 : _a.call(userModel_1.User, { Order: orderModel_1.Order });
(_b = productModel_1.Product.associate) === null || _b === void 0 ? void 0 : _b.call(productModel_1.Product, { OrderItem: orderItemModel_1.OrderItem });
(_c = orderModel_1.Order.associate) === null || _c === void 0 ? void 0 : _c.call(orderModel_1.Order, { User: userModel_1.User, OrderItem: orderItemModel_1.OrderItem });
(_d = orderItemModel_1.OrderItem.associate) === null || _d === void 0 ? void 0 : _d.call(orderItemModel_1.OrderItem, { Order: orderModel_1.Order, Product: productModel_1.Product });
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log('Database connection established successfully.');
        yield sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
});
exports.syncDatabase = syncDatabase;
exports.default = { sequelize, User: userModel_1.User, Product: productModel_1.Product, Order: orderModel_1.Order, OrderItem: orderItemModel_1.OrderItem };
