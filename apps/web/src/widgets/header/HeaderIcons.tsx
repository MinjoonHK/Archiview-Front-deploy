'use client';

import { NotificationIcon, SettingsIcon } from '@/shared/ui/icon';

export const HeaderIcons = () => {
  return (
    <div className="flex items-center gap-px">
      <NotificationIcon />
      <SettingsIcon />
    </div>
  );
};
