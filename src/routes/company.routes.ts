// src/routes/company.routes.ts
import { Router } from 'express';
import { createCompany, getCompanies } from '../controllers/company.controller';

const router = Router();

router.post('/', createCompany); // POST /companies
router.get('/', getCompanies);   // GET /companies

export default router;
