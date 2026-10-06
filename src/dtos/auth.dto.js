const Joi = require("joi");
// ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$


const createUserDto = Joi.object({
    name : Joi.string().required().min(3).max(50).trim().messages({
        "string.empty" : "nome est obligatoire",
        "string.min" : "nom est court",
        "string.max" : "nom est long",
        "any.required" : "nome est obligatoire"
    }),
    
    email : Joi.string().email().required().lowercase().messages({
        "string.empty" : "email est obligatoire",
        "string.email" : "email pas valide"
    }),

    password : Joi.string().required().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
    .min(8).messages({
        "string.empty" : "password est obligatoire",
        "string.pattern.base" : "password imposant au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial"
    })
})



const loginDto = Joi.object({
    email : Joi.string().email().required().lowercase().messages({
        "string.empty" : "email est obligatoire",
        "string.email" : "email pas valide"
    }),

    password : Joi.string().required().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
    .min(8).messages({
        "string.empty" : "password est obligatoire",
        "message.pattern.base" : "password imposant au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial"
    })
})


module.exports = {
    createUserDto,
    loginDto
}

