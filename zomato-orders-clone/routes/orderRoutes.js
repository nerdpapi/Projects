import express from 'express';
import Order from '../models/Order.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user.id });
  res.json(order);
});

router.get('/', protect, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('restaurant');
  res.json(orders);
});

export default router;