const db = require('../lib/db');

const NodeSchema = new db.Schema({
    name: { type: String, required: true },
    formattedName: { type: String, unique: true, required: true },
    description: { type: String },
    model: { type: String, required: true },
    active: {type: Boolean, default: true}
});

const NodeModel = db.model('Node', NodeSchema);

module.exports = NodeModel;