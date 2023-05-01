export class BaseResponseModel<ResponseType> {
    response: ResponseType;
    success: boolean;
    message: string;
}