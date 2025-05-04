// delayMiddleware.js
module.exports = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 500); // Delay in milliseconds
};
