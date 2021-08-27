const jwt = require("jsonwebtoken");

const { SECRET } = process.env;
const expiration = "2h";

module.exports = {
  authMiddleware({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, SECRET, { maxAge: expiration });
      req.user = data;
    } catch (err) {
      console.log("Invalid token");
    }

    return req;
  },
  signToken({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, SECRET, { expiresIn: expiration });
  },
};
