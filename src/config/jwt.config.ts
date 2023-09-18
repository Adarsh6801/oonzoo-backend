import jwt from "jsonwebtoken";

export const generateToken = (details: string | object) => {
  return jwt.sign({details}, process.env.JWT_SECREAT_KEY!, { expiresIn: "60d" });
};
