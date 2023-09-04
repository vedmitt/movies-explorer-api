const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');
const NotFoundError = require('../errors/not-found-err');
const { pageNotFoundMessage } = require('../utils/constants');

// роуты пользователей и фильмов
router.use('/', userRouter);
router.use('/movies', movieRouter);

router.use((req, res, next) => {
  next(new NotFoundError(pageNotFoundMessage));
});

module.exports = router;
