export interface IBaseResponse<T  = null> {
    status: String,
    message: String,
    data?: T | null; //data bisa diisi atau tidak
}