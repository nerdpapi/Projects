import express from 'express';

const router = express.Router();

// Sample route
router.get('/test', (req, res) => {
  res.send('Auth route working ✅');
});

export default router;

// import express from 'express';
// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await User.create({ name, email, password: hashedPassword });
//   res.json(user);
// });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   if (user && await bcrypt.compare(password, user.password)) {
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//     res.json({ token });
//   } else {
//     res.status(400).json({ message: 'Invalid credentials' });
//   }
// });

// export default router;