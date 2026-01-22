import { Card } from '@/shared/ui/common/Card';

import { PeriodDropdown } from './PeriodDropDown';

export const EditorInsight = () => {
  return (
    <div className="px-5 py-8">
      <div className="flex flex-row justify-between items-center pb-4">
        <p className="heading-20-bold">인사이트</p> <PeriodDropdown value="ALL" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-primary-10 border-none px-4 py-3">
          <p className="pb-1 body-14-semibold text-neutral-50">공유한 장소</p>
          <p className="heading-28-semibold">숫자숫자</p>
        </Card>
        <Card className="bg-primary-10 border-none px-4 py-3">
          <p className="pb-1 body-14-semibold text-neutral-50">인스타 유입</p>
          <p className="heading-28-semibold">숫자숫자</p>
        </Card>
        <Card className="bg-primary-10 border-none px-4 py-3">
          <p className="pb-1 body-14-semibold text-neutral-50">저장 수</p>
          <p className="heading-28-semibold">숫자숫자</p>
        </Card>
        <Card className="bg-primary-10 border-none px-4 py-3">
          <p className="pb-1 body-14-semibold text-neutral-50">조회 수</p>
          <p className="heading-28-semibold">숫자숫자</p>
        </Card>
      </div>
    </div>
  );
};
