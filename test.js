const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
    "mongodb+srv://salmaamd505:Ng2J5BbUUo0N3hLt@cluster0.gsiu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
      console.log("Successfully connected to the database");
  })
  .catch((error) => {
      console.error("Error connecting to the database", error);
  });


const User = mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true }
}));


app.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const newUser = new User({ name, email, phone, password });
    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({ message: 'Email is already registered' });
    } else {
      res.status(500).send({ message: 'Server error during registration' });
    }
  }
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
