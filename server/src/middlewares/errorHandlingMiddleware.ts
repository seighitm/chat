import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { ApiError } from "../shared/apiError";

export const errorHandlingMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);

  if (err instanceof ZodError) {
    const errors = err.errors.map((e) => ({
      path: e.path.join("."),
      message: e.message,
    }));
    res.status(400).json({ message: "Validation Error", errors });
  } else if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Internal Server Error" });
};
export default errorHandlingMiddleware;
