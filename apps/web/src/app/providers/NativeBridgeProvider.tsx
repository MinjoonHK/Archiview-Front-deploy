'use client';

import { ReactNode, useEffect } from 'react';

import { registerNativeBridgeEventForwarders } from '@/shared/lib/native-bridge';

export function NativeBridgeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const unregister = registerNativeBridgeEventForwarders();
    return unregister;
  }, []);

  return <>{children}</>;
}
