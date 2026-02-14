# Web Native Bridge

Next.js 웹에서 `webview-bridge` 통신을 한 군데에서 관리하는 모듈.

## 이 모듈이 하는 일

- `linkBridge()` 싱글톤(`nativeBridge`)을 한 번만 생성
- 네이티브 메서드 호출(web -> native)을 타입드 래퍼로 제공
- 네이티브 이벤트(native -> web)를 구독하는 작은 허브 제공
  - `nativeBridge.addEventListener(...)`는 `NativeBridgeProvider`에서 1회만 등록

## 파일 구성

- `apps/web/src/shared/lib/native-bridge/bridge.client.ts`
  - `nativeBridge = linkBridge<AppBridge, AppPostMessageSchema>({ ... })`
- `apps/web/src/shared/lib/native-bridge/nativeMethods.client.ts`
  - `openInAppBrowser`, `setToken` 같은 호출 래퍼
- `apps/web/src/shared/lib/native-bridge/nativeEvents.client.ts`
  - `subscribeNativeEvent(...)` + bridge 이벤트를 앱 리스너로 전달

계약(타입)은 아래 패키지에 있다:

- `packages/webview-bridge-contract`

## 사용법

### 네이티브 메서드 호출

```ts
import { openInAppBrowser } from '@/shared/lib/native-bridge';

await openInAppBrowser('https://archiview.space/');
```

### 위치 정보 가져오기(web -> native)

```ts
import { getCurrentLocation } from '@/shared/lib/native-bridge';

const location = await getCurrentLocation();
if (!location) {
  // 권한 거부/미지원
  return;
}

console.log(location.coords.latitude, location.coords.longitude);
```

### 네이티브 -> 웹 이벤트 구독

```ts
import { subscribeNativeEvent } from '@/shared/lib/native-bridge';

const unsubscribe = subscribeNativeEvent('authChanged', ({ token }) => {
  console.log('token from native:', token);
});

unsubscribe();
```

## 확장 방법

1. `packages/webview-bridge-contract/src/index.ts`에 타입 추가
2. `apps/app/bridge/*`에서 네이티브 메서드/이벤트 구현
3. 이 디렉토리에 래퍼/구독 API 추가
