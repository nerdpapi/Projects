const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  const { items, restaurantId } = req.body;
  try {
    const order = new Order({
      user: req.user.id,
      restaurant: restaurantId,
      items,
      status: 'Placed',
    });

    await order.save();
    res.json(order);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('restaurant');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};