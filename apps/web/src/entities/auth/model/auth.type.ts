import { ApiResponse } from '@/shared/lib/api/common';

type Role = 'EDITOR' | 'ARCHIVER';
export interface IRegisterRequestDTO {
  role: Role;
}

export interface IUserType {
  role: Role;
  provider: string;
  name: string;
  userId: string;
  email: string;
}

export type IRegisterResponeDTO = ApiResponse<Record<string, never>>;

// 현재 사용자 조회
export type IUserResponseDTO = ApiResponse<IUserType>;

// 로그아웃
export type ILogoutResponseDTO = ApiResponse<Record<string, never>>;
