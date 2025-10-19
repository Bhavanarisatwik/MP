const connectDB = require('../config/db');
const Optionset = require('../models/Optionset');

const seed = async () => {
  await connectDB();
  const options = [
    { key: 'severity', values: [{ value: 'low', label: 'Low' }, { value: 'high', label: 'High' }] },
    { key: 'status', values: [{ value: 'open', label: 'Open' }, { value: 'closed', label: 'Closed' }] }
  ];
  for (const o of options) {
    await Optionset.findOneAndUpdate({ key: o.key }, o, { upsert: true });
  }
  console.log('Seed complete');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });
