import { Router } from 'express';
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from '../controllers/Product';

const router = Router();

router.post('/', createProduct);
router.get('/', getProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router; 