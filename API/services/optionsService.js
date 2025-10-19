const Optionset = require('../models/Optionset');

const cache = new Map();

exports.getOptions = async (key) => {
  if (cache.has(key)) return cache.get(key);
  const doc = await Optionset.findOne({ key });
  const vals = (doc && doc.values) || [];
  cache.set(key, vals);
  return vals;
};

exports.clearCache = (key) => {
  if (key) cache.delete(key);
  else cache.clear();
};
