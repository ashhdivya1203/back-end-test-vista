// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  const status = err instanceof ApiError ? err.status : 500;
  const message = err instanceof ApiError ? err.message : 'Internal Server Error';
  console.error(err);
  res.status(status).json({ error: message });
}
