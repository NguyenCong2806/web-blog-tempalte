export default class ResultData<T> {
    status: boolean | undefined;
    statuscode: number | undefined;
    message: string | undefined;
    item: T | any;
    data: any;
    error: string | undefined;
  }