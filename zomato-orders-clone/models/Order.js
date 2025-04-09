import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  items: [String],
  status: { type: String, default: 'Pending' },
});

export default mongoose.model('Order', orderSchema);