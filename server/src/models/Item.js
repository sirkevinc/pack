const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },
  owner: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Item', ItemSchema);