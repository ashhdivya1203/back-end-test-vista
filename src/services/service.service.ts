// src/services/service.service.ts
import { Prisma } from '@prisma/client';
import { prisma } from '../prisma';
import { CreateServiceDTO } from '../dtos/service.dto';
import { ApiError } from '../utils/ApiError';

export async function createService(data: CreateServiceDTO) {
  const { companyId, name, price, description } = data;
  if (!companyId || !name || price == null) {
    throw new ApiError(400, 'companyId, name and price are required');
  }

  // ensure company exists
  const company = await prisma.company.findUnique({ where: { id: companyId } });
  if (!company) throw new ApiError(404, 'Company not found');

  try {
    const service = await prisma.service.create({
      data: {
        companyId,
        name,
        description,
        // convert to Prisma Decimal to be safe
        price: new Prisma.Decimal(price)
      }
    });
    return service;
  } catch (e) {
    // rethrow for error middleware to handle
    throw e;
  }
}

export async function getServiceById(id: number) {
  const service = await prisma.service.findUnique({
    where: { id },
    include: { company: true }
  });
  if (!service) throw new ApiError(404, 'Service not found');
  return service;
}
