// src/services/company.service.ts
import { Prisma } from '@prisma/client';
import { prisma } from '../prisma';
import { CreateCompanyDTO } from '../dtos/company.dto';
import { ApiError } from '../utils/ApiError';

export async function createCompany(data: CreateCompanyDTO) {
  const { name, registrationNumber } = data;
  if (!name || !registrationNumber) {
    throw new ApiError(400, 'name and registrationNumber are required');
  }

  try {
    const company = await prisma.company.create({
      data: { name, registrationNumber }
    });
    return company;
  } catch (e: unknown) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002') {
      throw new ApiError(409, 'registrationNumber already exists');
    }
    throw e;
  }
}

export async function listCompanies() {
  return prisma.company.findMany({
    include: { services: true }
  });
}
