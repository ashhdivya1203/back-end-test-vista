// src/dtos/company.dto.ts
export interface CreateCompanyDTO {
  name: string;
  registrationNumber: string;
}

export interface CompanyResponseDTO {
  id: number;
  name: string;
  registrationNumber: string;
  createdAt?: string;
  updatedAt?: string;
}
