export interface IApiResponse<T> {
  success: boolean;
  data: T;
  code: string;
  message: string;
  timestamp: string;
}
