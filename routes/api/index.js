const express = require('express');

const router = express.Router();

const lists = require('./lists');

const listCreate = require('./listCreate');

const listDelete = require('./listDelete');

router.get('/list', lists);

router.put('/', listCreate);

router.delete('/', listDelete);

module.exports = router;
