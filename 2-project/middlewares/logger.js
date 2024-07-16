// Logger Middleware - Logs Requests T0 Console
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next()
}


module.exports = loggerMiddleware