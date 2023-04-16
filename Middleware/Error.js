const ErrorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
  
    err.message = err.message || "Internal Server Error";
  
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };
  {/*const ErrorMiddleware = (err, req, res, next) => {
    const error = typeof err === "string" ? new Error(err) : err;
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Internal Server Error";
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  };  */}
  
  export default ErrorMiddleware;