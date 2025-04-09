const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const trackRoutes = require('./routes/trackRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tracks', trackRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
}).catch((err) => {
  console.error('Connection error', err);
});
