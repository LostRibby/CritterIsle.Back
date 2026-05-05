const authService = require('../services/authService');
const jwtUtils = require('../utils/jwt.utils');

const authController = {

   register: async (req, res) => {
  try {
    const userToAdd = req.body;

    if (!userToAdd?.email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (await authService.emailAlreadyExists(userToAdd.email)) {
      return res.status(409).json({
        statusCode: 409,
        message: "Email déjà utilisé !"
      });
    }

    const userCreated = await authService.create(userToAdd);

    res.location(`/api/users/${userCreated._id}`);

    return res.status(201).json({
      id: userCreated._id,
      firstname: userCreated.firstname,
      lastname: userCreated.lastname
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return res.status(500).json({
      message: err.message
    });
  }
}, 

    login: async (req, res) => {
        try {
            const credentials = req.body;

            const userFound = await authService.findByCredentials(credentials);

            if (!userFound) {
                return res.status(401).json({
                    statusCode: 401,
                    message: 'mauvaises informations de connexion 😢'
                });
            }

            const token = await jwtUtils.generate(userFound);

            return res.status(200).json({
                id: userFound._id,
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                token
            });

        } catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    }
};

module.exports = authController;