// src/routes/service.routes.ts
import { Router } from 'express';
import { createService, getService } from '../controllers/service.controller';

const router = Router();

router.post('/', createService);     // POST /services
router.get('/:id', getService);      // GET  /services/:id

export default router;
