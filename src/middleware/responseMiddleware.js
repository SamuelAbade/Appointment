function responseMiddleware(req, res, next) {
    res.success = (data, message = "Success", statusCode = 200) => {
      return res.status(statusCode).json({
        status: "success",
        message,
        data,
      });
    };

    res.error = (message, statusCode = 500, details = {}) => {
        return res.status(statusCode).json({
          status: "error",
          message,
          error: { code: statusCode, details }
        });
    };

    next();
}
  
module.exports = responseMiddleware;