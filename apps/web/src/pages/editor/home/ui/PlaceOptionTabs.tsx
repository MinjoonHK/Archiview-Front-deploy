'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/shared/ui/button';

export type PlaceOption =
  | 'ALL'
  | 'MOST_VIEWED'
  | 'MOST_SAVED'
  | 'MOST_INSTAGRAM'
  | 'MOST_DIRECTIONS';

const TABS: { label: string; value: PlaceOption }[] = [
  { label: '전체', value: 'ALL' },
  { label: '많이 조회 된', value: 'MOST_VIEWED' },
  { label: '많이 저장한', value: 'MOST_SAVED' },
  { label: '인스타 유입 된', value: 'MOST_INSTAGRAM' },
  { label: '길찾기 많은', value: 'MOST_DIRECTIONS' },
];

export const PlaceOptionTabs = ({ value }: { value: PlaceOption }) => {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const current = useMemo(() => value ?? 'ALL', [value]);

  const setMetric = (next: PlaceOption) => {
    const params = new URLSearchParams(sp?.toString() ?? '');

    if (next === 'ALL') {
      params.delete('metric');
    } else {
      params.set('metric', next);
    }

    const qs = params.toString();
    const path = pathname ?? '/';
    router.push(qs ? `${path}?${qs}` : path);
  };

  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap scroll-none pl-5">
      {TABS.map((t) => {
        const active = current === t.value;

        return (
          <Button
            key={t.value}
            type="button"
            onClick={() => setMetric(t.value)}
            className={[
              'flex-none w-auto whitespace-nowrap',
              'h-9 px-3 rounded-xl body-14-semibold transition-colors',
              active ? 'bg-primary-40 text-white' : 'bg-neutral-20 text-neutral-40',
            ].join(' ')}
          >
            {t.label}
          </Button>
        );
      })}
    </div>
  );
};
