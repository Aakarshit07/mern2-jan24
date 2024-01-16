const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ message: "Unauthorized request" });
  }

  if (authorization !== process.env.ROUTE_PASSWORD) {
    return res.status(403).json({ message: "Unauthorized request" });
  }

  next(); // pass on to next middleware function
};

module.exports = { verifyAuth };
