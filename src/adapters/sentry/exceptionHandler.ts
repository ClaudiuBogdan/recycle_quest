import * as Sentry from "@sentry/nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { HttpException } from "next-api-decorators";

export function logExceptionHandler(
  error: Error,
  _: NextApiRequest,
  res: NextApiResponse,
) {
  Sentry.captureException(error);
  const statusCode = error instanceof HttpException ? error.statusCode : 500;
  const message =
    error instanceof HttpException ? error.message : "Internal server error";
  const errors = error instanceof HttpException ? error.errors : undefined;
  res.status(statusCode).json({
    statusCode,
    message,
    errors,
  });
}
