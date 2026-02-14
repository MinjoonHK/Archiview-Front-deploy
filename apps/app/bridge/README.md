# App WebView Bridge

Expo 앱에서 WebView 브릿지 통신을 한 군데에서 관리하는 모듈.

## 파일 구성

- `apps/app/bridge/appBridge.ts`
  - 네이티브 메서드 선언(web -> native)
- `apps/app/bridge/postMessageSchema.ts`
  - 네이티브 -> 웹 이벤트 스키마 선언
- `apps/app/bridge/webview.tsx`
  - `createWebView`로 `WebView` 래퍼 + `postMessage` 생성
- `apps/app/bridge/events.ts`
  - 이벤트 emit / 상태 동기화용 헬퍼

계약(타입)은 아래 패키지에 있다:

- `packages/webview-bridge-contract`

## 사용법

### 브릿지 WebView 사용

화면/라우트에서는 `react-native-webview` 대신 래핑된 `WebView`를 import 한다:

```tsx
import { WebView } from '@/bridge';

export default function Screen() {
  return <WebView source={{ uri: 'https://archiview.space/' }} />;
}
```

### 웹으로 이벤트 보내기(native -> web)

```ts
import { emitAuthChanged } from '@/bridge';

emitAuthChanged('token');
emitAuthChanged(null);
```

### 네이티브 메서드 추가(web -> native)

1. `packages/webview-bridge-contract/src/index.ts`에 타입(시그니처) 추가
2. `apps/app/bridge/appBridge.ts`에 구현 추가
3. 웹에서 `apps/web/src/shared/lib/native-bridge/nativeMethods.client.ts`로 호출 래퍼 추가
