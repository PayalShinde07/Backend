import { Request, Response } from 'express';
import db from '../models';

const Order = db.Order;

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getOrder = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    await order.destroy();
    res.json({ message: 'Order deleted' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
