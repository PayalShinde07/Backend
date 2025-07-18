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
exports.deleteOrder = exports.updateOrder = exports.getOrderById = exports.getOrder = exports.createOrder = void 0;
const models_1 = __importDefault(require("../models"));
const Order = models_1.default.Order;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order.create(req.body);
        res.status(201).json(order);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createOrder = createOrder;
const getOrder = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Order.findAll();
        res.json(orders);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getOrder = getOrder;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order.findByPk(req.params.id);
        if (!order)
            return res.status(404).json({ error: 'Order not found' });
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getOrderById = getOrderById;
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order.findByPk(req.params.id);
        if (!order)
            return res.status(404).json({ error: 'Order not found' });
        yield order.update(req.body);
        res.json(order);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateOrder = updateOrder;
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield Order.findByPk(req.params.id);
        if (!order)
            return res.status(404).json({ error: 'Order not found' });
        yield order.destroy();
        res.json({ message: 'Order deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteOrder = deleteOrder;
