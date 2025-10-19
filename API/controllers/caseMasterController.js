const Case = require('../models/Case');
const filterHelpers = require('../helpers/filterHelpers');

exports.list = async (req, res) => {
  try {
    const query = filterHelpers.parseFilters(req.headers['filters']);
    const docs = await Case.find(query.filter).limit(query.limit || 100);
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const c = new Case(req.body);
    await c.save();
    res.status(201).json(c);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
