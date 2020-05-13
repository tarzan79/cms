const controller = require('../controllers/controller');
const express = require("express");
let router = express.Router();
let model = "Page";
const Page = require("../models/page");
/** api */
router.get('/', (req, res) => { // liste
  controller.find(model, req, res);
});
router.get('/:id', (req, res) => { // find by id
  controller.findById(model, req, res);
});
router.post('/search', (req, res) => { // find with params
  controller.findOne(model, req, res);
});
router.post('/', (req, res) => { // create
  controller.create(model, req, res);
});
router.put('/:id', (req, res) => { // update
  controller.update(model, req, res);
});
router.delete('/:id', (req, res) => { // delete
  controller.delete(model, req, res);
});


module.exports = router;
