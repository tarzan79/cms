const db = require('../lib/db');

const PageSchema = new db.Schema({
    title: { type: String, required: true },
    description: { type: String },
    content: { type: String, required: true },
    author: { type: String, required: true },
    creationDate: { type: Date, default: Date.now, required: true }
});

const PageModel = db.model('Page', PageSchema);

module.exports = PageModel;