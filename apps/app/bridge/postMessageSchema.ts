import { postMessageSchema } from '@webview-bridge/react-native';
import type {
  AppPostMessageSchema,
  AppReadyPayload,
  AuthChangedPayload,
} from '@archiview/webview-bridge-contract';

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

const parseNumber = (value: unknown, fallback: number): number => {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
};

const parseNativeToken = (value: unknown): string | null => {
  if (typeof value === 'string') return value;
  if (value === null) return null;
  return null;
};

export const appPostMessageSchema: AppPostMessageSchema = postMessageSchema({
  appReady: {
    validate: (data: unknown): AppReadyPayload => {
      const now = Date.now();
      if (!isRecord(data)) {
        return { timestamp: now };
      }
      return {
        timestamp: parseNumber(data.timestamp, now),
      };
    },
  },
  authChanged: {
    validate: (data: unknown): AuthChangedPayload => {
      if (!isRecord(data)) {
        return { token: null };
      }
      return {
        token: parseNativeToken(data.token),
      };
    },
  },
});
