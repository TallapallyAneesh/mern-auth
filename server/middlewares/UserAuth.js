import jwt from "jsonwebtoken";


export const requireSignin = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      message: "Invalid or expired token",
    });
  }
  try {
    const decodedId = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedId) {
      req.body.userId = decodedId.id;
      req.body.isAdmin = decodedId.isAdmin;
    } else {
      return res.status(400).json({
        message: "Invalid or expired token",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid or expired token",
    });
  }
};
