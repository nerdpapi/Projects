const Restaurant = require('../models/Restaurant');

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.addRestaurant = async (req, res) => {
  const { name, cuisine, location } = req.body;
  try {
    const restaurant = new Restaurant({ name, cuisine, location });
    await restaurant.save();
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};