import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const hashPass = async (password: string) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

const compare = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

const createToken = (
  creds: object,
  secret: string,
  maxAge: number | string
) => {
  return jwt.sign(creds, secret, { expiresIn: maxAge });
};

export { hashPass, createToken, compare };
