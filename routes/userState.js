const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.post('/', ctrl.userState.create)
router.get('/:id', ctrl.userState.index)
router.delete('/:id', ctrl.userState.destroy)

module.exports = router