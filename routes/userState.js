const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/:id', ctrl.userState.find)
router.post('/', ctrl.userState.create)
// router.delete('/:id', ctrl.userState.destroy)

module.exports = router