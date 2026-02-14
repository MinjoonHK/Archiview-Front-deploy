'use client';

import type { AppReadyPayload, AuthChangedPayload } from '@archiview/webview-bridge-contract';

import { nativeBridge } from './bridge.client';

type NativeEventMap = {
  appReady: AppReadyPayload;
  authChanged: AuthChangedPayload;
};

type NativeEventName = keyof NativeEventMap;

const listenerMap: Record<NativeEventName, Set<(payload: unknown) => void>> = {
  appReady: new Set(),
  authChanged: new Set(),
};

const emit = <K extends NativeEventName>(eventName: K, payload: NativeEventMap[K]) => {
  const listeners = listenerMap[eventName];
  if (listeners.size === 0) return;
  for (const listener of listeners) listener(payload);
};

export const subscribeNativeEvent = <K extends NativeEventName>(
  eventName: K,
  listener: (payload: NativeEventMap[K]) => void,
) => {
  const wrapped = (payload: unknown) => {
    listener(payload as NativeEventMap[K]);
  };
  const set = listenerMap[eventName];
  set.add(wrapped);
  return () => {
    set.delete(wrapped);
  };
};

export const registerNativeBridgeEventForwarders = () => {
  const unsubAppReady = nativeBridge.addEventListener('appReady', (payload) => {
    emit('appReady', payload);
  });

  const unsubAuthChanged = nativeBridge.addEventListener('authChanged', (payload) => {
    emit('authChanged', payload);
  });

  return () => {
    unsubAppReady();
    unsubAuthChanged();
  };
};
