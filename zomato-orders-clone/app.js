import express from 'express';
import authRoutes from './routes/authRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

export default app;