const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  title: String,
  artist: String,
  url: String,
  cover: String
});

module.exports = mongoose.model('Track', trackSchema);
