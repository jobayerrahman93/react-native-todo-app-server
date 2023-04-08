import CustomError from "./customError";

const error = (message?: string, status?: number, type?: string) => {
  throw new CustomError(
    message || "Something went wrong",
    status || 500,
    type || "Internal server Error"
  );
};

export default error;
