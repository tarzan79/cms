const mongoose = require('mongoose');
const config = require("../config/config.json");


mongoose.connect(`mongodb://${config.database.url}:${config.database.port}/${config.database.base}`, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Serveur MongoDb connecté: \n=> url: ${config.database.url}:${config.database.port}/${config.database.base}`);
}).catch(reason => {
    throw reason;
});

module.exports = mongoose;