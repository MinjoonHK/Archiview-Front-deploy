import { ApiResponse } from '@/shared/lib/api/common';

type Role = 'EDITOR' | 'ARCHIVER';
export interface IRegisterRequestDTO {
  role: Role;
}

export type IRegisterResponeDTO = ApiResponse<Record<string, never>>;
