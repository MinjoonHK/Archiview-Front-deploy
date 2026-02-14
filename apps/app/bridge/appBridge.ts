import * as WebBrowser from 'expo-web-browser';

import { bridge } from '@webview-bridge/react-native';
import type { AppBridgeState } from '@archiview/webview-bridge-contract';

export const appBridge = bridge<AppBridgeState>(({ get, set }) => ({
  bridgeVersion: 1,
  token: null,

  async getBridgeVersion() {
    return get().bridgeVersion;
  },

  async openInAppBrowser(url: string) {
    await WebBrowser.openBrowserAsync(url);
  },

  async setToken(token) {
    set({ token });
  },

  async getToken() {
    return get().token;
  },

  async clearToken() {
    set({ token: null });
  },
}));
