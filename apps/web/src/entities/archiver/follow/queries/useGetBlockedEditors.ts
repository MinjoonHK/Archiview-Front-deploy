import { useQuery } from '@tanstack/react-query';

import { archiverKeys } from '@/shared/lib/query-keys';
import { archiverFollowGet } from '../api/archiverFollow-get';
import type { IBlockedEditorListResponseDTO } from '../model/archiverFollow.type';

interface IParams {
  useMock?: boolean;
}

export const useGetBlockedEditors = ({ useMock = false }: IParams = {}) => {
  return useQuery<IBlockedEditorListResponseDTO>({
    queryKey: archiverKeys.getBlockedEditors.applyFilters({ useMock }).queryKey,
    queryFn: () => archiverFollowGet.getBlockedEditors({ useMock }),
  });
};
