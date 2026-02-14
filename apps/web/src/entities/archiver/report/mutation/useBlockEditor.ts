import type { ExtendedKyHttpError } from '@/shared/lib/api/common';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { archiverReportPost } from '../api/archiverReport-post';
import type { IBlockEditorResponseDTO } from '../model/archiverReport.type';

interface IUseBlockEditorOptions {
  onSuccess?: (data: IBlockEditorResponseDTO) => void;
}

export const useBlockEditor = (options?: IUseBlockEditorOptions) => {
  const { mutate: blockEditor } = useMutation({
    mutationFn: (params: { editorId: string }) => archiverReportPost.blockEditor(params),
    onSuccess: (data: IBlockEditorResponseDTO) => {
      toast.success('차단 완료');
      options?.onSuccess?.(data);
    },
    onError: (error: ExtendedKyHttpError) => {
      const message = error.errorData?.message ?? error.message ?? '알 수 없는 오류';
      toast.error(message);
    },
  });

  return { blockEditor };
};
