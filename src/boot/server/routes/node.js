const controller = require('../controllers/controller');
const express = require("express");
let router = express.Router();
let model = "Node";
const Node = require("../models/node");

/** pour la gestion des noeuds */
router.get('/', (req, res) => { // liste of nodes
  controller.find(model, req, res);
});
router.get('/:id', (req, res) => { // find node by id
  controller.findById(model, req, res);
});
router.post('/', (req, res) => { // create a node
  controller.create(model, req, res);
});
router.put('/:id', (req, res) => { // update a node
  controller.update(model, req, res);
});
router.delete('/:id', (req, res) => { // delete a node
  controller.delete(model, req, res);
});

/** pour la gestion des objets des different noeud */
router.get('/:node', (req, res) => { // list of object's node
  controller.find(req.params.node, req, res);
});
router.get('/:node/:id', (req, res) => { // find an object's node by this id
  controller.findById(req.params.node, req, res);
});
router.post('/:node', (req, res) => { // create an object's node
  controller.create(req.params.node, req, res);
});
router.put('/:node/:id', (req, res) => { // update an object's node
  controller.update(req.params.node, req, res);
});
router.delete('/:node/:id', (req, res) => { // delete an object's node
  controller.delete(req.params.node, req, res);
});


module.exports = router;
