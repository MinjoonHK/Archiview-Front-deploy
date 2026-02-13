import { clientApi } from '@/shared/lib/api/client';
import { ARCHIVER_ENDPOINTS } from '@/shared/constants/endpoints/archiver/ArchiverEndpoints';

import type {
  IArchiverMyProfileResponseDTO,
  IEditorsTrustedResponseDTO,
  IMyFollowsResponseDTO,
  IEditorProfileResponseDTO,
} from '../model/archiverProfile.type';

export const archiverProfileGet = {
  // 내 프로필
  getMyProfile: async (params: { useMock?: boolean }): Promise<IArchiverMyProfileResponseDTO> => {
    const response = await clientApi
      .get(`${ARCHIVER_ENDPOINTS.me.profile}`, {
        searchParams: { useMock: params?.useMock ?? false },
      })
      .json<IArchiverMyProfileResponseDTO>();
    return response;
  },

  // 믿고 먹는 에디터
  getEditorsTrusted: async (params: { useMock?: boolean }): Promise<IEditorsTrustedResponseDTO> => {
    const response = await clientApi
      .get(`${ARCHIVER_ENDPOINTS.editors.trusted}`, {
        searchParams: { useMock: params?.useMock ?? false },
      })
      .json<IEditorsTrustedResponseDTO>();
    return response;
  },

  // 내가 팔로잉하는 목록
  getMyFollows: async (params: { useMock?: boolean }): Promise<IMyFollowsResponseDTO> => {
    const response = await clientApi
      .get(`${ARCHIVER_ENDPOINTS.follows}`, {
        searchParams: { useMock: params?.useMock ?? false },
      })
      .json<IMyFollowsResponseDTO>();
    return response;
  },

  getEditorProfile: async (params: {
    editorId: string;
    useMock?: boolean;
  }): Promise<IEditorProfileResponseDTO> => {
    const response = await clientApi
      .get(`archivers/editors/${params.editorId}/profile`, {
        searchParams: { useMock: params?.useMock ?? false },
      })
      .json<IEditorProfileResponseDTO>();
    return response;
  },
};
