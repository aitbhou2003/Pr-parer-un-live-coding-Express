const express = require('express');

const router = express.Router();

const {
    create,
    update,
    getOne
} = require('../controllers/product.controller');

router.post('/', create);

router.put('/:id', update);

router.get('/:id', getOne);

module.exports = router;
