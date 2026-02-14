import { createWebView } from '@webview-bridge/react-native';
import type { AppBridgeState, AppPostMessageSchema } from '@archiview/webview-bridge-contract';

import { appBridge } from './appBridge';
import { appPostMessageSchema } from './postMessageSchema';

export const { WebView, postMessage } = createWebView<AppBridgeState, AppPostMessageSchema>({
  bridge: appBridge,
  postMessageSchema: appPostMessageSchema,
  debug: __DEV__,
});
