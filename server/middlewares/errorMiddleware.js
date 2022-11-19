import ApiError from "../errors/ApiError.js";

export default function errorMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({message: err.message, errors: err.error});
  }
  return res.status(500).json({message: "Внутрення ошибка сервера"});
}