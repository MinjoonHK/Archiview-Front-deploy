import React from 'react';

import { BackButtonHeader } from '@/widgets/header';

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex h-dvh flex-col">
      <BackButtonHeader title="장소등록" />
      <main className="flex-1 min-h-0">{children}</main>
    </div>
  );
}
