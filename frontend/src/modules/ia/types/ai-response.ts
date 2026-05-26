export type AIResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
}