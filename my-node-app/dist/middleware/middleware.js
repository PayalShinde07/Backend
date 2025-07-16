"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Middleware = (req, res, next) => {
    console.log("Hello from middleware!");
    console.log('Request Method:', req.method);
    next(); // Call next middleware
};
exports.default = Middleware;
