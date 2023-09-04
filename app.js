const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');

const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');

const config = require('./config');
const { connectDatabase } = require('./db');
const { serverCrashTestMessage } = require('./utils/constants');
const { limiter } = require('./middlewares/ratelimiter');

const app = express();

app.use(limiter);
app.use(helmet());
app.disable('x-powered-by');

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger); // подключаем логгер запросов

// краш-тест
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(serverCrashTestMessage);
  }, 0);
});

// CORS обходы
app.use(cors);

// подключаемся к серверу mongo
connectDatabase();

// подключаем роуты
app.use(routes);

// подключаем логгер ошибок
app.use(errorLogger);

// обработчики ошибок
app.use(errors()); // обработчик ошибок celebrate
app.use(errorHandler); // централизованный обработчик

app.listen(config.app.port);
