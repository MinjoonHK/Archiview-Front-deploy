import { useState } from 'react';

import { Card } from '@/shared/ui/common/Card/Card';

type Role = 'EDITOR' | 'ARCHIVER';

export const RoleSelectCard = () => {
  const [role, setRole] = useState<Role | null>(null);

  return (
    <Card selected={role === 'EDITOR'} onClick={() => setRole('EDITOR')} className="p-5">
      <div className="flex flex-1 flex-col gap-2">
        <span className="inline-flex w-fit rounded-full bg-primary-40 px-3 py-1 caption-12-semibold text-white">
          에디터
        </span>

        <p className="body-16-semibold text-neutral-90">
          내가 남긴 장소 기록이
          <br />
          어떤 반응을 얻는지 확인해보세요
        </p>

        <ul className="list-disc pl-5 py-2 body-14-regular text-neutral-40">
          <li>보고 바로 저장</li>
          <li>지도에서 한눈에</li>
          <li>자동으로 정리</li>
        </ul>
      </div>
    </Card>
  );
};
