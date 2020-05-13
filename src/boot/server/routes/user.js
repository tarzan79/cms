const controllerUser = require('../controllers/user')
const controller = require('../controllers/controller')
const express = require('express')
let router = express.Router()
let model = 'User'

router.get('/logout', (req, res) => {
  controllerUser.logout(req, res)
})

router.post('/add', (req, res) => {
  controllerUser.signup(req, res)
})

router.get('/', (req, res) => {
  console.log('liste utilisateurs')
  controller.find(model, req, res)
})

router.get('/info', (req, res) => {
  console.log('info  utilisateur courant ')
  controller.find(model, req, res)
})

router.get('/:id', (req, res) => {
  console.log('info utilisateur')
  controller.find(model, req, res)
})

router.put('/:id', (req, res) => {
  console.log('info utilisateur')
  controller.update(model, req, res)
})

router.delete('/:id', (req, res) => {
  console.log('info utilisateur')
  controller.delete(model, req, res)
})

module.exports = router
