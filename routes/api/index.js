const express = require('express');

const router = express.Router();

const controller = require('./crud');

router.get('/list', controller.list);

router.put('/', controller.create);

router.delete('/', controller.delete);

module.exports = router;
