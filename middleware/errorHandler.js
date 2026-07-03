/**
 * Central Express error handler.
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  
  const errorMessage = err.message || 'Internal Server Error';
  
  // Log the stack trace in development mode
  console.error(`[Error] ${errorMessage}`, err.stack);

  // If request expects JSON (API routes), return JSON error
  if (req.xhr || req.headers.accept?.includes('json') || req.originalUrl.startsWith('/api')) {
    return res.json({
      success: false,
      message: errorMessage,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
  }

  // Otherwise, render an error page
  res.render('error', {
    message: errorMessage,
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
};

module.exports = errorHandler;
