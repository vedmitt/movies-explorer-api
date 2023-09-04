const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UnauthorizedError = require('../errors/unauthorized-err');
const { authInvalidCredentialsMessage, modelRequiredField, modelInvalidField, minLengthField, maxLengthField } = require('../utils/constants');

const AUTH_ERROR = new UnauthorizedError(authInvalidCredentialsMessage);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, modelRequiredField],
    unique: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: modelInvalidField,
    },
  },
  password: {
    type: String,
    required: [true, modelRequiredField],
    select: false,
  },
  name: {
    type: String,
    required: [true, modelRequiredField],
    minlength: [2, minLengthField],
    maxlength: [30, maxLengthField],
  },
}, { versionKey: false });

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(AUTH_ERROR);
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(AUTH_ERROR);
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
