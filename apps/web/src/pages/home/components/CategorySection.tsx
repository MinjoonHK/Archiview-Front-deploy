import { HomeIcon } from '@/shared/ui/icon';

const CategoryItem = ({
  icon,
  label,
  path,
}: {
  icon: React.ReactNode;
  label: string;
  path: string;
}): React.ReactElement => {
  return (
    <div className="flex flex-col gap-[6px] items-center">
      <div className="h-[52px] w-[52px] rounded-[12px] flex items-center justify-center bg-primary-60">
        {icon}
      </div>
      <div className="body-12-medium">{label}</div>
    </div>
  );
};

export const CategorySection = (): React.ReactElement => {
  return (
    <section className="py-[32px] px-[20px]">
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center justify-between">
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="내주변" path="/" />
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="한식" path="/" />
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="양식" path="/" />
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="카페" path="/" />
        </div>
        <div className="flex items-center justify-between">
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="햄버거" path="/" />
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="주점" path="/" />
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="데이트" path="/" />
          <CategoryItem icon={<HomeIcon className="text-neutral-10" />} label="기타" path="/" />
        </div>
      </div>
    </section>
  );
};
