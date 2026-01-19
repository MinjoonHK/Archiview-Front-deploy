'use client';

import { ArchiviewLogoIcon, NotificationIcon, SettingsIcon } from '@/shared/ui/icon';

import { Header } from './Header';

export const LogoHeader = (): React.ReactElement => {
  return (
    <Header
      left={<ArchiviewLogoIcon />}
      right={
        <div className="flex items-center gap-px">
          <NotificationIcon onClick={() => console.log('알림 클릭')} />
          <SettingsIcon onClick={() => console.log('설정 클릭')} />
        </div>
      }
    />
  );
};
