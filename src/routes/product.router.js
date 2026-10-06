const express = require('express');

const router = express.Router();

const validate = require('../middlewares/validate');

const {
    createProductDto,
    updateProductDto,
    idParamDto
} = require('../dtos/product.dto');

const {
    create,
    update,
    getOne
} = require('../controllers/product.controller');

router.post(
    '/',
    validate(createProductDto),
    create
);

router.put(
    '/:id',
    validate(idParamDto, 'params'),
    validate(updateProductDto),
    update
);

router.get(
    '/:id',
    validate(idParamDto, 'params'),
    getOne
);

module.exports = router;
