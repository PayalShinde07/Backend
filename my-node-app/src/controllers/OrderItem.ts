import { Request, Response } from 'express';
import db from '../models';

const OrderItem = db.OrderItem;

export const createOrderItem = async (req: Request, res: Response) => {
  try {
    const orderItem = await OrderItem.create(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getOrderItems = async (_req: Request, res: Response) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getOrderItemById = async (req: Request, res: Response) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) return res.status(404).json({ error: 'Order Item not found' });
    res.json(orderItem);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateOrderItem = async (req: Request, res: Response) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) return res.status(404).json({ error: 'Order Item not found' });
    await orderItem.update(req.body);
    res.json(orderItem);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteOrderItem = async (req: Request, res: Response) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) return res.status(404).json({ error: 'Order Item not found' });
    await orderItem.destroy();
    res.json({ message: 'Order Item deleted' });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
