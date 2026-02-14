'use client';

import type { NativeToken } from '@archiview/webview-bridge-contract';

import { nativeBridge } from './bridge.client';

export const isWebViewBridgeAvailable = () => nativeBridge.isWebViewBridgeAvailable;

export const isNativeMethodAvailable = (methodName: string) => {
  return nativeBridge.isNativeMethodAvailable(methodName);
};

export const getBridgeVersion = async (): Promise<number | null> => {
  if (!nativeBridge.isNativeMethodAvailable('getBridgeVersion')) {
    return null;
  }
  return nativeBridge.getBridgeVersion();
};

export const openInAppBrowser = async (url: string): Promise<boolean> => {
  if (!nativeBridge.isNativeMethodAvailable('openInAppBrowser')) {
    return false;
  }
  await nativeBridge.openInAppBrowser(url);
  return true;
};

export const setToken = async (token: NativeToken): Promise<boolean> => {
  if (!nativeBridge.isNativeMethodAvailable('setToken')) {
    return false;
  }
  await nativeBridge.setToken(token);
  return true;
};

export const getToken = async (): Promise<NativeToken | null> => {
  if (!nativeBridge.isNativeMethodAvailable('getToken')) {
    return null;
  }
  return nativeBridge.getToken();
};

export const clearToken = async (): Promise<boolean> => {
  if (!nativeBridge.isNativeMethodAvailable('clearToken')) {
    return false;
  }
  await nativeBridge.clearToken();
  return true;
};
