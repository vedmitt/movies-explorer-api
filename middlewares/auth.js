const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../errors/unauthorized-err');
const { userUnauthorizedMessage } = require('../utils/constants');

const handleAuthError = (next) => {
  next(new UnauthorizedError(userUnauthorizedMessage));
};

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return handleAuthError(next);
  }
  let payload;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return handleAuthError();
  }
  req.user = payload;
  next();
  return null;
};
