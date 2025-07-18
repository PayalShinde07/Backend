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
exports.deleteOrderItem = exports.updateOrderItem = exports.getOrderItemById = exports.getOrderItems = exports.createOrderItem = void 0;
const models_1 = __importDefault(require("../models"));
const OrderItem = models_1.default.OrderItem;
const createOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield OrderItem.create(req.body);
        res.status(201).json(orderItem);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createOrderItem = createOrderItem;
const getOrderItems = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItems = yield OrderItem.findAll();
        res.json(orderItems);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getOrderItems = getOrderItems;
const getOrderItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield OrderItem.findByPk(req.params.id);
        if (!orderItem)
            return res.status(404).json({ error: 'Order Item not found' });
        res.json(orderItem);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getOrderItemById = getOrderItemById;
const updateOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield OrderItem.findByPk(req.params.id);
        if (!orderItem)
            return res.status(404).json({ error: 'Order Item not found' });
        yield orderItem.update(req.body);
        res.json(orderItem);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateOrderItem = updateOrderItem;
const deleteOrderItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItem = yield OrderItem.findByPk(req.params.id);
        if (!orderItem)
            return res.status(404).json({ error: 'Order Item not found' });
        yield orderItem.destroy();
        res.json({ message: 'Order Item deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteOrderItem = deleteOrderItem;
