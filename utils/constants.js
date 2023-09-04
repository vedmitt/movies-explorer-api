const imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png|bmp)/;
const videoUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\./;

const rateLimiterMessage = 'Слишком много запросов к серверу. Попробуйте снова позже.';
const server500Message = 'На сервере произошла ошибка';
const serverCrashTestMessage = 'Сервер сейчас упадёт';
const pageNotFoundMessage = 'Страница не найдена :(';
const authInvalidCredentialsMessage = 'Неправильные почта или пароль';

const modelRequiredField = 'Поле должно быть заполнено';
const modelInvalidField = 'Неправильный формат';
const minLengthField = 'Минимальная длина поля - 2';
const maxLengthField = 'Максимальная длина поля - 30';

const userUnauthorizedMessage = 'Необходима авторизация';
const userBadRequestMessage = 'Некорректные данные при создании пользователя';
const userConflictMessage = 'Данный email уже зарегистрирован';
const userTokenSuccessMessage = 'токен создан и записан в куки';
const userNotFoundMessage = 'Пользователь по указанному id не найден';
const userUpdateValidationMessage = 'Некорректные данные при обновлении данных пользователя';

const movieValidationMessage = 'Некорректные данные при создании фильма';
const movieNotFoundMessage = 'Фильм с указанным id не найден';
const movieForbiddenMessage = 'Чужой фильм нельзя удалить!';


module.exports  = {
    imageUrlRegex,
    videoUrlRegex,
    rateLimiterMessage,
    server500Message,
    serverCrashTestMessage,
    userUnauthorizedMessage,
    pageNotFoundMessage,
    authInvalidCredentialsMessage,
    modelRequiredField,
    modelInvalidField,
    minLengthField,
    maxLengthField,
    userBadRequestMessage,
    userConflictMessage,
    userTokenSuccessMessage,
    userNotFoundMessage,
    userUpdateValidationMessage,
    movieValidationMessage,
    movieNotFoundMessage,
    movieForbiddenMessage,
};
