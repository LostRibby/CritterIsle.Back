const jwtUtils = require('../../utils/jwt.utils');

//*builder qui renvoie la fontion middleware (avantage custom)
const authentificationMiddleware = () => {
  return async (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        statusCode: 401,
        message: "vous devez être connecté.e",
      });
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        statusCode: 401,
        message: "token manquant",
      });
    }

    try {
      const payload = await jwtUtils.decode(token);

      if (!payload) {
        return res.status(401).json({
          statusCode: 401,
          message: "token invalide",
        });
      }

      req.user = payload;
      next();

    } catch (err) {
      return res.status(401).json({
        statusCode: 401,
        message: "token invalide ou expiré",
      });
    }
  };
};

module.exports = authentificationMiddleware;