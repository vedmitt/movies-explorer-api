const router = require('express').Router();

const userRouter = require('./users');
const movieRouter = require('./movies');
const auth = require('../middlewares/auth');
const { validateUserBody, validateAuthentication } = require('../middlewares/validations');
const NotFoundError = require('../errors/not-found-err');
const { createUser, login } = require('../controllers/users');

router.post('/signup', validateUserBody, createUser);

router.post('/signin', validateAuthentication, login);

router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});

// авторизация
router.use(auth);

// роуты, которым авторизация нужна
router.use('/users', userRouter);
router.use('/movies', movieRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена :('));
});

module.exports = router;
