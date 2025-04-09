import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  cuisine: String,
});

export default mongoose.model('Restaurant', restaurantSchema);