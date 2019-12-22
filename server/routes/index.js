// Define your routes
import express from 'express';
import path from 'path';
const mongoose = require('mongoose');

const router = express.Router();

const dbHost = 'mongodb://mongo/mevn-docker';
mongoose.connect(dbHost);

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Routes go here.
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
      if (err) res.status(500).send(error)

      res.status(200).json(users);
  });
});

router.post('/users', (req, res) => {
  let user = new User({
      name: req.body.name,
      age: req.body.age
  });

  user.save(error => {
      if (error) res.status(500).send(error);

      res.status(201).json({
          message: 'User created successfully'
      });
  });
});

module.exports = router;
