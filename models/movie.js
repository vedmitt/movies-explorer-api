const mongoose = require('mongoose');
const validator = require('validator');
const { modelRequiredField, modelInvalidField } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, modelRequiredField],
  },
  director: {
    type: String,
    required: [true, modelRequiredField],
  },
  duration: {
    type: Number,
    required: [true, modelRequiredField],
  },
  year: {
    type: String,
    required: [true, modelRequiredField],
  },
  description: {
    type: String,
    required: [true, modelRequiredField],
  },
  image: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: modelInvalidField,
    },
    required: [true, modelRequiredField],
  },
  trailerLink: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: modelInvalidField,
    },
    required: [true, modelRequiredField],
  },
  thumbnail: {
    type: String,
    validate: {
      validator: (v) => validator.isURL(v),
      message: modelInvalidField,
    },
    required: [true, modelRequiredField],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
