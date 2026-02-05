import type { ApiResponse } from '@/shared/lib/api/common';

export interface IPlaceInfo {
  placeId: number;
  name: string;
  roadAddress: string;
  detailAddress: string;
  zipCode: string;
  latitude: number;
  longitude: number;
}

export interface IArchiverMyProfileResponse {
  postId: number;
  url: string;
  hashTag: string;
  placeInfoResponseList: IPlaceInfo[];
}

// 내 프로필 조회(아카이버) API DTO
export type IArchiverMyProfileResponseDTO = ApiResponse<IArchiverMyProfileResponse>;
