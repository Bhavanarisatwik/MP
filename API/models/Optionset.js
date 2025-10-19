const mongoose = require('mongoose');

const OptionsetSchema = new mongoose.Schema({
  key: { type: String, required: true, index: true },
  values: [{ value: String, label: String }],
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Optionset', OptionsetSchema);
