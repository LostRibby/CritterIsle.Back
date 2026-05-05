const jwt = require('jsonwebtoken');

const jwtUtils = {

    generate: (user) => {
        const { JWT_ISSUER, JWT_AUDIENCE, JWT_SECRET } = process.env;

        if (!JWT_SECRET || !JWT_ISSUER || !JWT_AUDIENCE) {
            throw new Error("JWT environment variables missing");
        }

        return new Promise((resolve, reject) => {
            const payload = {
                id: user._id,
                role: user.role
            };

            const options = {
                algorithm: 'HS256',
                expiresIn: '3d',
                audience: JWT_AUDIENCE,
                issuer: JWT_ISSUER
            };

            jwt.sign(payload, JWT_SECRET, options, (error, token) => {
                if (error) return reject(error);
                resolve(token);
            });
        });
    },

    decode: (token) => {
        const { JWT_ISSUER, JWT_AUDIENCE, JWT_SECRET } = process.env;

        if (!token) {
            return Promise.reject(new Error('Pas de token reçu'));
        }

        const options = {
            audience: JWT_AUDIENCE,
            issuer: JWT_ISSUER
        };

        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SECRET, options, (error, payload) => {
                if (error) return reject(error);
                resolve(payload);
            });
        });
    }
};

module.exports = jwtUtils;