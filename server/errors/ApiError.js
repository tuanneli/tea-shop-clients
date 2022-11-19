export default class ApiError extends Error {
  status;
  error;

  constructor(status, message, error = []) {
    super(message);
    this.status = status;
    this.error = error;
  }

  static badRequest(message, error = []) {
    return new ApiError(400, message, error);
  }

  static notFound(message, error = []) {
    return new ApiError(404, message, error);
  }

  static authorizationFailure() {
    return new ApiError(401, "Ошибка авторизации");
  }

  static unknownError() {
    return new ApiError(520, "Неизвестная ошибка");
  }
}

