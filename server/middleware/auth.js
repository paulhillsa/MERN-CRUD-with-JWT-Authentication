// Verification Middleware

// Config
const jwt = require("jsonwebtoken");

// Middleware for authorisation
function auth(req, res, next) {
  try {
    // get the token from the header if present
    const token = req.cookies.token;
    // if no token found, return response (without going to the next middleware)
    if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });
    // verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // store user id on the request object
    //nb
    req.user = verified.user;
    // go to the next middleware
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

// Export
module.exports = auth;