function errorMiddleware(err, req, res, next) {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
      status: "error",
      message: err.message || "Internal Server Error",
      error: { code: statusCode }
    });
}
  
module.exports = errorMiddleware;
  