const mongoose = require('mongoose');

const CaseIncidentSchema = new mongoose.Schema({
  caseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
  summary: { type: String },
  severity: { type: String },
  occurredAt: { type: Date }
});

module.exports = mongoose.model('CaseIncident', CaseIncidentSchema);
