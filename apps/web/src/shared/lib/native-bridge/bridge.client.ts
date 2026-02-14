'use client';

import { linkBridge } from '@webview-bridge/web';
import type { AppBridge, AppPostMessageSchema } from '@archiview/webview-bridge-contract';

export const nativeBridge = linkBridge<AppBridge, AppPostMessageSchema>({
  timeout: 5000,
  debug: process.env.NODE_ENV === 'development',
  throwOnError: false,
  onFallback: (methodName) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[native-bridge] fallback:', methodName);
    }
  },
});
