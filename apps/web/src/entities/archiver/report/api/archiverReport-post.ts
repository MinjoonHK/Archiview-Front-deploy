import { clientApi } from '@/shared/lib/api/client';

import type {
  IReportPostPlaceResponseDTO,
  IBlockEditorResponseDTO,
} from '../model/archiverReport.type';

export const archiverReportPost = {
  // 장소카드 아카이브 신고
  reportPostPlace: async (params: {
    postPlaceId: number;
  }): Promise<IReportPostPlaceResponseDTO> => {
    const response = await clientApi
      .post(`archivers/reports/post-places/${params.postPlaceId}`)
      .json<IReportPostPlaceResponseDTO>();
    return response;
  },

  // 에디터 차단
  blockEditor: async (params: { editorId: string }): Promise<IBlockEditorResponseDTO> => {
    const response = await clientApi
      .post(`archivers/reports/post-places/${params.editorId}`)
      .json<IBlockEditorResponseDTO>();
    return response;
  },
};
