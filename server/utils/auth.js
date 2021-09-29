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
  signToken({ email, name, _id, companyName }) {
    const payload = { email, name, _id, companyName };
    return jwt.sign({ data: payload }, SECRET, { expiresIn: expiration });
  },
};
