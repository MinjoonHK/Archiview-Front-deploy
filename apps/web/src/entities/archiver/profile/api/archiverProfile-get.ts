import { clientApi } from '@/shared/lib/api/client';
import { ARCHIVER_ENDPOINTS } from '@/shared/constants/endpoints/archiver/ArchiverEndpoints';

import type { IArchiverMyProfileResponseDTO } from '../model/archiverProfile.type';

export const archiverProfileGet = {
  getMyProfile: async (): Promise<IArchiverMyProfileResponseDTO> => {
    const response = await clientApi
      .get(`${ARCHIVER_ENDPOINTS.me.profile}`)
      .json<IArchiverMyProfileResponseDTO>();
    return response;
  },
};
