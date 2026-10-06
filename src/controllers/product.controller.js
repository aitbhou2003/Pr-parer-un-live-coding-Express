const Product = require('../models/product.model');

const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return res.status(201).json({
            status: 'success',
            message: 'Produit créé avec succès',
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Erreur serveur'
        });
    }
};

const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if (!product) {
            return res.status(404).json({
                status: 'fail',
                message: 'Produit introuvable'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Produit modifié avec succès',
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Erreur serveur'
        });
    }
};

const getOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                status: 'fail',
                message: 'Produit introuvable'
            });
        }

        return res.status(200).json({
            status: 'success',
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Erreur serveur'
        });
    }
};

module.exports = {
    create,
    update,
    getOne
};
