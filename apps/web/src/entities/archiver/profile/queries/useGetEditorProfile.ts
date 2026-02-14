import { useQuery } from '@tanstack/react-query';

import { archiverKeys } from '@/shared/lib/query-keys';

import { archiverProfileGet } from '../api/archiverProfile-get';
import { IEditorProfileResponseDTO } from '../model/archiverProfile.type';

export const useGetEditorProfile = (params: { editorId: string; useMock?: boolean }) => {
  return useQuery<IEditorProfileResponseDTO>({
    queryKey: archiverKeys.getEditorProfile.applyFilters({
      editorId: params.editorId,
      useMock: params.useMock,
    }).queryKey,
    queryFn: () =>
      archiverProfileGet.getEditorProfile({ editorId: params.editorId, useMock: params.useMock }),
    enabled: Boolean(params.editorId),
  });
};
