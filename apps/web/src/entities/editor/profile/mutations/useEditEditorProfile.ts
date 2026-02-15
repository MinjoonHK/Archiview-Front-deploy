import { useMutation } from '@tanstack/react-query';

import { editorProfilePut } from '@/entities/editor/profile/api/editorProfile-put';
import type { IEditorProfileEditRequestDTO } from '@/entities/editor/profile/model/editorProfile.type';

export const useEditEditorProfile = () => {
  return useMutation({
    mutationFn: (payload: IEditorProfileEditRequestDTO) => editorProfilePut.putMyProfile(payload),
  });
};
