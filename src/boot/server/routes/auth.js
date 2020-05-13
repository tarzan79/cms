const controllerUser = require('../controllers/user');
const express = require("express");
let router = express.Router();

/** api */
router.post('/auth', (req, res) => {
  controllerUser.login(req, res);
});



module.exports = router;
