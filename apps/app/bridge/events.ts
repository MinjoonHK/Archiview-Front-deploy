import type { NativeToken } from '@archiview/webview-bridge-contract';

import { appBridge } from './appBridge';
import { postMessage } from './webview';

export const emitAppReady = () => {
  postMessage('appReady', { timestamp: Date.now() });
};

export const emitAuthChanged = (token: NativeToken) => {
  postMessage('authChanged', { token });
};

export const setNativeToken = async (token: NativeToken) => {
  await appBridge.getState().setToken(token);
  emitAuthChanged(token);
};

export const clearNativeToken = async () => {
  await appBridge.getState().clearToken();
  emitAuthChanged(null);
};
