import { clientApi } from '@/shared/lib/api/client';
import { EDITOR_ENDPOINTS } from '@/shared/constants/endpoints/editor/EditorEndpoints';

import type { IEditorProfileEditRequestDTO } from '../model/editorProfile.type';
import type { ApiResponse } from '@/shared/lib/api/common';

export const editorProfilePut = {
  // eslint-disable-next-line  @rushstack/no-new-null
  putMyProfile: async (payload: IEditorProfileEditRequestDTO): Promise<ApiResponse<null>> => {
    const response = await clientApi
      .put(`${EDITOR_ENDPOINTS.me.profile}`, { json: payload })
      .json<ApiResponse<null>>();

    return response;
  },
};
