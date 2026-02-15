'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CATEGORIES } from '@/shared/constants/category';
import { OptionTabs } from '@/shared/ui/common/Tabs/OptionTabs';
import { useGetCategoryPlaceList } from '@/entities/archiver/category/queries/useGetCategoryPlaceList';
import { Item } from '@/shared/ui/common/Item';
import { EyeIcon, FolderOutlineIcon, RightArrowIcon } from '@/shared/ui/icon';

const DEFAULT_CATEGORY_ID = CATEGORIES[0]?.id ?? 1;

export const ArchiverCategoryPage = (): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const categoryId = useMemo(() => {
    const raw = sp?.get('categoryId');
    const id = raw ? Number(raw) : NaN;

    if (!Number.isFinite(id)) return DEFAULT_CATEGORY_ID;
    if (!CATEGORIES.some((c) => c.id === id)) return DEFAULT_CATEGORY_ID;
    return id;
  }, [sp]);

  const setCategory = (nextId: number) => {
    const params = new URLSearchParams(sp?.toString() ?? '');
    params.set('categoryId', String(nextId));

    const qs = params.toString();
    const path = pathname ?? '/archiver/category';
    router.replace(qs ? `${path}?${qs}` : path);
  };

  const categoryTabs = useMemo(() => CATEGORIES.map((c) => ({ label: c.name, value: c.id })), []);

  const categoryName = useMemo(
    () => CATEGORIES.find((c) => c.id === categoryId)?.name ?? '',
    [categoryId],
  );

  const { data, isLoading, isError } = useGetCategoryPlaceList({ categoryId, useMock: true });
  const apiErrorMessage = data && !data.success ? data.message : null;
  const places = data?.data?.places ?? [];
  const totalCount = data?.data?.totalCount ?? 0;

  return (
    <div className="flex h-full flex-col min-h-0">
      <OptionTabs
        items={categoryTabs}
        value={categoryId}
        onChange={setCategory}
        containerClassName="px-5 flex gap-2 overflow-x-auto whitespace-nowrap scroll-none pt-4"
      />

      <div className="px-5 pt-6">
        <p className="heading-20-bold">
          {categoryName} <span className="text-primary-40">{totalCount}</span>
        </p>
      </div>

      {isLoading ? <div className="px-5 pt-6">로딩중...</div> : null}
      {isError ? <div className="px-5 pt-6">불러오기 실패</div> : null}
      {apiErrorMessage ? <div className="px-5 pt-6">{apiErrorMessage}</div> : null}

      {!isLoading && !isError && !apiErrorMessage ? (
        <div className="flex-1 min-h-0 pt-2">
          {places.map((p) => (
            <Item
              key={p.placeId}
              thumbnail={<div className="h-18 w-18 overflow-hidden rounded-2xl bg-neutral-30" />}
              onClick={() => router.push(`/archiver/place-info/${p.placeId}`)}
            >
              <div className="flex flex-col pl-2 min-w-0">
                <p className="body-16-semibold flex flex-row items-center justify-between">
                  <span className="truncate">{p.placeName}</span>
                  <RightArrowIcon />
                </p>

                <p className="body-14-semibold text-neutral-50 w-53 truncate pt-0.75">
                  {p.latestDescription}
                </p>

                <div className="flex flex-row gap-2 caption-12-regular text-primary-50 pt-1">
                  <p className="flex flex-row items-center gap-1">
                    <FolderOutlineIcon className="w-4 text-primary-30" />
                    {p.saveCount}
                  </p>
                  <p className="flex flex-row items-center gap-1">
                    <EyeIcon className="w-4 text-primary-30" />
                    {p.viewCount}
                  </p>
                </div>
              </div>
            </Item>
          ))}
        </div>
      ) : null}
    </div>
  );
};
