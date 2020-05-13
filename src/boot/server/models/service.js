const db = require('../lib/db');

const ServiceSchema = new db.Schema({
    name: { type: String, required: true },
    description: { type: String },
    model: { type: String, required: true }
});

const ServiceModel = db.model('Service', ServiceSchema);

module.exports = ServiceModel;