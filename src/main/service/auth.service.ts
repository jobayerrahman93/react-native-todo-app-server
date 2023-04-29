import { Request } from "express";
import config from "../../common/config/config";
import {
  compare,
  createToken,
  hashPass,
} from "../../common/utils/libraries/lib";
import { db } from "../app/database";

// user registration service
const authRegisterService = async (req: Request) => {
  const { email, password, city, name } = req.body;

  const checkUser = await db("user").select("name").where({ email });

  if (checkUser.length) {
    return {
      success: false,
      message: "Already have user with this email",
    };
  }

  const hashPassword = await hashPass(password);

  const res = await db("user").insert({
    email,
    password: hashPassword,
    name,
    city,
  });

  if (res.length) {
    const token = createToken(
      { email, name, city },
      config.JWT_SECRET_USER,
      "24h"
    );

    return {
      success: true,
      data: {
        name,
        email,
        city,
      },
      token,
      message: "Successfully registered ",
    };
  }

  return {
    success: false,
    message: "Registration failed",
  };
};

// user login service
const authLoginService = async (req: Request) => {
  const { email, password } = req.body;

  const checkUser = await db("user")
    .select("name", "email", "city", "password")
    .where({ email });

  const { password: hashedPass, ...rest } = checkUser[0];

  const checkPass = await compare(password, hashedPass);

  console.log({ checkPass });

  if (!checkPass) {
    return {
      success: false,
      message: "Wrong password or email",
    };
  }

  const token = createToken({ ...rest }, config.JWT_SECRET_USER, "24h");

  return {
    success: true,
    data: rest,
    token,
  };
};

export { authRegisterService, authLoginService };
