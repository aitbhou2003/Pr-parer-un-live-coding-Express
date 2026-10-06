const Joi = require('joi');

const createProductDto = Joi.object({
    title: Joi.string()
        .trim()
        .min(5)
        .max(100)
        .required()
        .messages({
            'string.empty': 'Le titre est obligatoire',
            'string.min':
                'Le titre doit comporter au moins 5 caractères',
            'string.max':
                'Le titre ne peut pas dépasser 100 caractères',
            'any.required': 'Le titre est obligatoire'
        }),

    price: Joi.number()
        .min(0)
        .max(100000)
        .required()
        .messages({
            'number.base': 'Le prix doit être un nombre',
            'number.min':
                'Le prix doit être positif ou nul',
            'number.max':
                'Le prix ne peut pas dépasser 100000',
            'any.required': 'Le prix est obligatoire'
        }),

    category: Joi.string()
        .valid(
            'electronics',
            'clothing',
            'books',
            'home'
        )
        .required()
        .messages({
            'any.only':
                'La catégorie doit être electronics, clothing, books ou home',
            'any.required':
                'La catégorie est obligatoire'
        }),

    tags: Joi.array()
        .items(Joi.string().trim())
        .min(1)
        .unique()
        .required()
        .messages({
            'array.min':
                'Le produit doit avoir au moins un tag',
            'array.unique':
                'Les tags doivent être uniques',
            'any.required':
                'Les tags sont obligatoires'
        })
});

const updateProductDto = Joi.object({
    title: Joi.string()
        .trim()
        .min(5)
        .max(100),

    price: Joi.number()
        .min(0)
        .max(100000),

    category: Joi.string()
        .valid(
            'electronics',
            'clothing',
            'books',
            'home'
        ),

    tags: Joi.array()
        .items(Joi.string().trim())
        .min(1)
        .unique()
}).min(1);

const idParamDto = Joi.object({
    id: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.pattern.base':
                'L\'identifiant doit être un ObjectId MongoDB valide',
            'any.required':
                'L\'identifiant est obligatoire'
        })
});

module.exports = {
    createProductDto,
    updateProductDto,
    idParamDto
};
