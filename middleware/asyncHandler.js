/**
 * Wrapper function to catch asynchronous errors in route handlers and pass them to the express error handler.
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncHandler;
