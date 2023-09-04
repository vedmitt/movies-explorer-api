const router = require('express').Router();

const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { validateUserName, validateUserBody, validateAuthentication } = require('../middlewares/validations');
const { getCurrentUser, updateUserInfo } = require('../controllers/users');

router.post('/signup', validateUserBody, createUser);

router.post('/signin', validateAuthentication, login);

router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});

// авторизация
router.use(auth);

router.get('/users/me', getCurrentUser);

router.patch('/users/me', validateUserName, updateUserInfo);

module.exports = router;
