export interface IBaseResponse<T = null> {
  status: string;
  message: string;
  data?: T | null; // data bisa diisi atau tidak
}
