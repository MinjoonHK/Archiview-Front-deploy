'use client';

import { LocationPinIcon, UserCircleIcon, HomeIcon, NavigationFooterFolderIcon } from '../icon';

const NavigationFooterItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}): React.ReactElement => {
  return (
    <button className="w-[79.75px] h-[54px] flex flex-col items-center justify-center gap-[4px]">
      <div>{icon}</div>
      <div className="caption-12-semibold">{label}</div>
    </button>
  );
};

export const NavigationFooter = (): React.ReactElement => {
  return (
    <div className="h-[75px] bottom-0 px-[16px] border-t border-neutral-40 pt-[8px] pb-[13px]">
      <div className="flex items-center justify-between gap-[8px]">
        <NavigationFooterItem icon={<HomeIcon />} label="홈" />
        <NavigationFooterItem icon={<NavigationFooterFolderIcon />} label="팔로우" />
        <NavigationFooterItem icon={<LocationPinIcon />} label="아카이브" />
        <NavigationFooterItem icon={<UserCircleIcon />} label="마이페이지" />
      </div>
    </div>
  );
};
