const db = require('../lib/db');

const UserSchema = new db.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

const UserModel = db.model('User', UserSchema);

module.exports = UserModel;