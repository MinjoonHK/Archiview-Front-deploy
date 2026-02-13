import { useQuery } from '@tanstack/react-query';

import { archiverKeys } from '@/shared/lib/query-keys';

import { archiverProfileGet } from '../api/archiverProfile-get';
import { IEditorPlaceResposneDTO } from '../model/archiverProfile.type';

export const useGetEditorPlaceList = (params: {
  userId: string;
  sort?: 'LATEST' | 'OLDEST';
  useMock?: boolean;
}) => {
  return useQuery<IEditorPlaceResposneDTO>({
    queryKey: archiverKeys.getEditorPlaceList.applyFilters({
      userId: params.userId,
      sort: params.sort,
      useMock: params.useMock,
    }).queryKey,
    queryFn: () =>
      archiverProfileGet.getEditorPlaceList({
        userId: params.userId,
        sort: params.sort ?? 'LATEST',
        useMock: params.useMock ?? false,
      }),
    enabled: Boolean(params.userId) && params.userId !== 'undefined',
  });
};
