const requestIp = require("request-ip");

// create middleware for logging new date, Requested IP, and path of request
const middleWare = (req, res, next) => {
  console.log(
    new Date().toLocaleDateString(),
    requestIp.getClientIp(req),
    req.path
  );
  next();
};

module.exports = { middleWare };
