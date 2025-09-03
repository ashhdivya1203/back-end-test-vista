// src/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import companyRouter from './routes/company.routes';
import serviceRouter from './routes/service.routes';
import { errorHandler } from './middlewares/error.middleware';
import { logger } from './middlewares/logger';


dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(express.json());
app.use(logger);

// Routes
app.use('/companies', companyRouter);
app.use('/services', serviceRouter);

// Error middleware (last)
app.use(errorHandler);

export default app;
