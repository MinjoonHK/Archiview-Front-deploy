import { ApiResponse } from '@/shared/lib/api/common';

// 장소 카드 신고
export type IReportPostPlaceResponseDTO = ApiResponse<Record<string, never>>;

// 에디터 프로필 뷰에서 신고 (에디터 차단)
export type IBlockEditorResponseDTO = ApiResponse<Record<string, never>>;
