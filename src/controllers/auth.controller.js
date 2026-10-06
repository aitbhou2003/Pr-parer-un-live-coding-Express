const User = require('../models/user.model');

const register = async (req, res) => {
    try {
        
        const user = await User.create(req.body);

        return res.status(201).json({
            status: 'success',
            message: 'Utilisateur créé avec succès',
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Erreur serveur'
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: 'fail',
                message: 'Email ou mot de passe incorrect'
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                status: 'fail',
                message: 'Email ou mot de passe incorrect'
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'Connexion réussie',
            data: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Erreur serveur'
        });
    }
};

module.exports = {
    register,
    login
};
