import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const hashPass = async (password: string) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

const createToken = (
  creds: object,
  secret: string,
  maxAge: number | string
) => {
  return jwt.sign(creds, secret, { expiresIn: maxAge });
};

export { hashPass, createToken };
