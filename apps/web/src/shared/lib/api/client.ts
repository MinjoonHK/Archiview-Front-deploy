import 'client-only';

import ky from 'ky';

import type { KyHttpError, ExtendedKyHttpError, ApiErrorResponse } from './common';

export const errorInterceptor = async (error: KyHttpError) => {
  const ct = error.response.headers.get('content-type') ?? '';

  if (ct.includes('application/json')) {
    const data = (await error.response.clone().json()) as ApiErrorResponse;
    (error as ExtendedKyHttpError).errorData = data;
  }

  return error;
};

export const clientApi = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL + '/api/v1',
  timeout: 10000,
  credentials: 'include',
  hooks: {
    afterResponse: [
      async (_, __, response) => {
        // JSON이 아닌데 status가 에러면: ky가 HTTPError 던질 거고 beforeError가 fallback로 처리
        if (response.status === 401) {
          window.location.href = '/login';
          // JSON이 아니면 여기서 강제로 끊는 게 낫다 (선택)
          throw new Error('Unauthorized');
        }
      },
    ],
    beforeRequest: [
      (request) => {
        const token =
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZDA0NmYzNy05ZjI5LTQ5NDUtYThmZi03N2ZjMmU1ODQ5ODIiLCJlbWFpbCI6InRlc3QtZWRpdG9yQGFyY2hpdmlldy5jb20iLCJyb2xlIjoiRURJVE9SIiwiaWF0IjoxNzcwMTMzMzQ1LCJleHAiOjE3NzI3MjUzNDV9.l-7LBogvBcjC-HgnPsllbZLw_JN14WwGSn-GcjoZ_tF7kKLwKuPuqtX4cexxzFG5o2_FQGkIi50IRBLpYE5Rmw';

        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
    beforeError: [errorInterceptor],
  },
});
