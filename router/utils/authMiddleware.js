const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "token dibutuhkan" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "token dibutuhkan" });

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    req.user = decode;

    const exp = decode.exp * 1000;
    const now = Date.now();

    if (exp - now < 5 * 60 * 1000) {
      const newToken = jwt.sign(
        { userId: decode.userId, username: decode.username, role: decode.role },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.setHeader("x-refresh-token", newToken);
    }

    next();
  } catch (err) {
    return res.status(401).json({ message: "token invalid" });
  }
}

module.exports = { authMiddleware };
