import { clientApi } from '@/shared/lib/api/client';

import type { IWithDrawResponseDTO } from '../model/auth.type';

export const authDelete = {
  // 회원탈퇴
  withDraw: async (): Promise<IWithDrawResponseDTO> => {
    const response = await clientApi.delete(`users/me`).json<IWithDrawResponseDTO>();

    return response;
  },
};
