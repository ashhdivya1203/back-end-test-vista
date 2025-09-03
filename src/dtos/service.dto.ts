// src/dtos/service.dto.ts
export interface CreateServiceDTO {
  companyId: number;
  name: string;
  description?: string;
  price: number; // send as numeric value from client
}

export interface ServiceResponseDTO {
  id: number;
  companyId: number;
  name: string;
  description?: string | null;
  price: string; // Prisma Decimal usually returns as string
  company?: { id: number; name: string; registrationNumber: string };
  createdAt?: string;
  updatedAt?: string;
}
