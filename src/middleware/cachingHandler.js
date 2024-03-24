const NodeCache = require('node-cache');

// Create a node-cache instance
const cache = new NodeCache({ stdTTL: 600 });

// Middleware function to attach the cache to the request object
module.exports.cacheMiddleware = (req, res, next) => {
    req.cache = cache;
    next();
}