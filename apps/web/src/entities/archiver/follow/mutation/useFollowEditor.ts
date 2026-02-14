import type { ExtendedKyHttpError } from '@/shared/lib/api/common';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { archiverKeys } from '@/shared/lib/query-keys';
import { archiverFollowPost } from '../api/archiverFollow-post';
import type { IFollowResponseDTO } from '../model/archiverFollow.type';

interface IUseFollowEditorOptions {
  onSuccess?: (data: IFollowResponseDTO) => void;
}

export const useFollowEditor = (options?: IUseFollowEditorOptions) => {
  const qc = useQueryClient();

  const { mutate: followEditor } = useMutation({
    mutationFn: (editorId: string) => archiverFollowPost.followEditor(editorId),
    onSuccess: async (data: IFollowResponseDTO) => {
      toast.success('팔로우 완료');
      await qc.invalidateQueries({ queryKey: archiverKeys.getMyFollows.all.queryKey });
      options?.onSuccess?.(data);
    },
    onError: (error: ExtendedKyHttpError) => {
      const message = error.errorData?.message ?? error.message ?? '알 수 없는 오류';
      toast.error(message);
    },
  });

  return { followEditor };
};
