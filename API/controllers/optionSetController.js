const Optionset = require('../models/Optionset');

exports.list = async (req, res) => {
  try {
    const key = req.query.key;
    const doc = await Optionset.findOne({ key });
    res.json(doc || { key, values: [] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
