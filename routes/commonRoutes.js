const express = require('express')
const router = express.Router()
const commonController = require('../controllers/commonController')

router.get('/echo', commonController.echo);
router.post('/login', commonController.login);

// router.get('/', producerController.index);
// router.post('/message', producerController.message);

module.exports = router;