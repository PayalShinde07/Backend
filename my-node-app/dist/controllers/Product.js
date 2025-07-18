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
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getProduct = exports.createProduct = void 0;
const models_1 = __importDefault(require("../models"));
const Product = models_1.default.Product;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product.create(req.body);
        res.status(201).json(product);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createProduct = createProduct;
const getProduct = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product.findAll();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getProduct = getProduct;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product.findByPk(req.params.id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.getProductById = getProductById;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product.findByPk(req.params.id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        yield product.update(req.body);
        res.json(product);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield Product.findByPk(req.params.id);
        if (!product)
            return res.status(404).json({ error: 'Product not found' });
        yield product.destroy();
        res.json({ message: 'Product deleted' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteProduct = deleteProduct;
