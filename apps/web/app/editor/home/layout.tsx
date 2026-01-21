import React from 'react';

import { Header } from '@/widgets/header';
import { ArchiviewLogoIcon } from '@/shared/ui/icon';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex h-dvh flex-col">
      <Header left={<ArchiviewLogoIcon />} />
      <main className="flex-1 min-h-0">{children}</main>
    </div>
  );
}
