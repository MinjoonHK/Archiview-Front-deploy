'use client';

import type { ReactNode } from 'react';
import { Ssgoi, type SsgoiConfig } from '@ssgoi/react';
import { drill } from '@ssgoi/react/view-transitions';
import { usePathname } from 'next/navigation';

const ssgoiConfig: SsgoiConfig = {
  transitions: [
    {
      from: '/archiver/home',
      to: '/archiver/place-info/*',
      transition: drill({ direction: 'enter' }),
    },
    {
      from: '/archiver/place-info/*',
      to: '/archiver/home',
      transition: drill({ direction: 'exit' }),
    },
  ],
};

export function SsgoiProvider({ children }: { children: ReactNode }): ReactNode {
  return (
    <Ssgoi config={ssgoiConfig} usePathname={usePathname}>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>{children}</div>
    </Ssgoi>
  );
}
