const express = require('express');
const program = require('commander');

const helmet = require('helmet');
const session = require('express-session'); //require('cookie-session');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const db = require('./lib/db');
const config = require("./config/config.json");
app.config = config;

app.use(session({
  secret: 'keyboard cat',
  cookie: {}
  /*,
    cookie: { secure: true,
              httpOnly: true,
              domain: 'example.com',
              path: 'foo/bar',
              expires: expiryDate
            }*/
}));
var morgan = require('morgan')
morgan('tiny');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

const init = async () => {
  let route = require("./routes/index")(app); // c'est la qu'on charge les routes de l'api
  let port = app.config.server.port || 5000
  let host = app.config.server.host || "0.0.0.0"
  /** server start */
  app.listen(port, host, () => {
    console.log("Serveur démarré avec succes");
    console.log("=> url: " + host + ":" + port);
    //console.log(db.models);
  });
}

program
  .description('en mode cli')
  .option('-c, --cli', 'use cli mode')
  .parse(process.argv);
if (program.cli) {
  db.connection.on('connected', () => {
    init("api");
    // require("lesCommandes.js");
    console.log("=> Mode CLI activé");
    cli.promptUser();
  });
} else {
  db.connection.on('connected', () => {
    init();
  });

}
