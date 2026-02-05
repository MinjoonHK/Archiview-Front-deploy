import { clientApi } from '@/shared/lib/api/client';
import { ARCHIVER_ENDPOINTS } from '@/shared/constants/endpoints/archiver/ArchiverEndpoints';

import type {
  IArchiverMyProfileResponseDTO,
  IEditorsTrustedResponseDTO,
  IMyFollowsResponseDTO,
} from '../model/archiverProfile.type';

export const archiverProfileGet = {
  getMyProfile: async (params: { useMock?: boolean }): Promise<IArchiverMyProfileResponseDTO> => {
    const response = await clientApi
      .get(`${ARCHIVER_ENDPOINTS.me.profile}`, {
        searchParams: { useMock: params?.useMock ?? false },
      })
      .json<IArchiverMyProfileResponseDTO>();
    return response;
  },

  getEditorsTrusted: async (params: { useMock?: boolean }): Promise<IEditorsTrustedResponseDTO> => {
    const response = await clientApi
      .get(`${ARCHIVER_ENDPOINTS.editors.trusted}`, {
        searchParams: { useMock: params?.useMock ?? false },
      })
      .json<IEditorsTrustedResponseDTO>();
    return response;
  },

  getMyFollows: async (params: { useMock?: boolean }): Promise<IMyFollowsResponseDTO> => {
    const response = await clientApi
      .get(`${ARCHIVER_ENDPOINTS.follows}`, {
        searchParams: { useMock: params?.useMock ?? false },
      })
      .json<IMyFollowsResponseDTO>();
    return response;
  },
};
