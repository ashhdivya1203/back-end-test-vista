// src/controllers/company.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as companySvc from '../services/company.service';

export async function createCompany(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await companySvc.createCompany(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function getCompanies(_req: Request, res: Response, next: NextFunction) {
  try {
    const items = await companySvc.listCompanies();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
}
