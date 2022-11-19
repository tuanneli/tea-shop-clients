import {Router} from 'express';
import userRouter from '../user/userRouter.js';
import productRouter from './productRouter.js';
import categoryRouter from './categoryRouter.js';

const router = new Router();

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);

export default router;