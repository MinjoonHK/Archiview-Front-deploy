import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { archiverKeys } from '@/shared/lib/query-keys';
import type { ExtendedKyHttpError } from '@/shared/lib/api/common';

import { archiverFollowPost } from '../api/archiverFollow-post';
import type { IBlockEditorResponseDTO } from '../model/archiverFollow.type';

interface IUseBlockEditorOptions {
  useMock?: boolean;
  onSuccess?: (data: IBlockEditorResponseDTO) => void;
}

export const useBlockEditor = (options?: IUseBlockEditorOptions) => {
  const queryClient = useQueryClient();
  const useMock = options?.useMock ?? false;

  const { mutate: blockEditor, ...rest } = useMutation<
    IBlockEditorResponseDTO,
    ExtendedKyHttpError,
    string
  >({
    mutationFn: (editorId: string) => archiverFollowPost.blockEditor(editorId),

    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: archiverKeys.getBlockedEditors.applyFilters({ useMock }).queryKey,
      });

      options?.onSuccess?.(data);
    },

    onError: (error) => {
      const message = error.errorData?.message ?? error.message ?? '알 수 없는 오류';
      toast.error(message);
    },
  });

  return { blockEditor, ...rest };
};
