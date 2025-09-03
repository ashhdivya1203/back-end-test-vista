// src/controllers/service.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as serviceSvc from '../services/service.service';

export async function createService(req: Request, res: Response, next: NextFunction) {
  try {
    const created = await serviceSvc.createService(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function getService(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
    const svc = await serviceSvc.getServiceById(id);
    res.status(200).json(svc);
  } catch (err) {
    next(err);
  }
}
