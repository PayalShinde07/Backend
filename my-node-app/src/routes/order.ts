import { Router } from 'express';
import { createOrder, getOrder, getOrderById, updateOrder, deleteOrder } from '../controllers/Order';

const router = Router();

router.post('/', createOrder);
router.get('/', getOrder);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router; 