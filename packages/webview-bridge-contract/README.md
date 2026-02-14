# @archiview/webview-bridge-contract

브릿지 계약(타입)을 공유하는 워크스페이스 패키지.

- React Native(Expo): `apps/app`
- Web(Next.js): `apps/web`

이 패키지는 의도적으로 **types-only**로 구성되어 있고(런타임 코드 없음), 타입 공유만 담당한다.

## 포함 내용

- `AppBridgeState` / `AppBridge`
  - 웹에서 호출할 수 있는 네이티브 메서드(web -> native)
  - 웹에서 구독/조회할 수 있는 최소 네이티브 상태(`bridge.store`)
- `AppPostMessageSchema`
  - 네이티브에서 웹으로 보내는 이벤트(native -> web)

## 확장 방법

1. 새 네이티브 메서드 추가(web -> native)

- `AppBridgeState`에 메서드 시그니처를 추가한다.
- `apps/app/bridge/appBridge.ts`에 구현을 추가한다.
- 웹에서는 `apps/web/src/shared/lib/native-bridge/nativeMethods.client.ts`에 래퍼를 추가해서 사용한다.

2. 새 이벤트 추가(native -> web)

- `AppPostMessageSchema`에 키를 추가하고, payload 타입을 export 한다.
- `apps/app/bridge/postMessageSchema.ts`(validate)와 `apps/app/bridge/events.ts`(emit)에 반영한다.
- 웹에서는 `apps/web/src/shared/lib/native-bridge/nativeEvents.client.ts`에서 구독/전달 로직을 추가한다.

## 참고

- 하위호환을 위해 `getBridgeVersion()`을 유지하는 것을 권장한다.
- 웹에서 네이티브 메서드 호출 시 `isWebViewBridgeAvailable` / `isNativeMethodAvailable`로 가드해야 한다.

## 예시: 위치 정보 가져오기(web -> native)

웹에서는 네이티브 메서드로 위치 정보를 요청할 수 있다.

```ts
import { getCurrentLocation } from '@/shared/lib/native-bridge';

const location = await getCurrentLocation();
if (!location) {
  // 권한 거부/미지원
  return;
}

console.log(location.coords.latitude, location.coords.longitude);
```
