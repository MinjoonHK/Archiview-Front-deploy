import { useQuery } from '@tanstack/react-query';
import { archiverKeys } from '@/shared/lib/query-keys';
import { archiverCategoryGet } from '../api/archiverCategory-get';

export const useGetCategoryPlaceList = (params: {
  categoryId: number;
  useMock?: boolean;
  enabled?: boolean;
}) => {
  const { enabled = true, ...filters } = params;

  return useQuery({
    queryKey: archiverKeys.getCategoryPlaceList.applyFilters(filters).queryKey,
    queryFn: () => archiverCategoryGet.getCategoryPlaceList(filters),
    enabled,
  });
};
