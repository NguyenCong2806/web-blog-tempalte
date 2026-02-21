import axios, { AxiosInstance } from "axios";
import ResultData from "../models/BaseModel/ResultData";
import Results from "../models/BaseModel/Results";
import IService from "./IService";
import { urlapi } from "src/config/urlapi";
import SearchParams from "src/models/BaseModel/SearchParams";

abstract class Service<T, ID = string | number> implements IService<T, ID> {
  protected readonly axiosinstance: AxiosInstance;

  constructor() {
    // Chỉ khởi tạo Axios cơ bản, KHÔNG có Interceptor, KHÔNG gắn Token
    this.axiosinstance = axios.create({
      baseURL: urlapi.HTTPAPI,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
      // withCredentials: true // Bạn có thể bật dòng này nếu API public cần cookie, nếu không thì comment lại
    });
  }
  async findAlls(url: string,site:string, data: SearchParams): Promise<Results<T>> {
    return (await this.axiosinstance.get<Results<T>>(`/${url}`, { params: { ...data, site } })).data;
  }

  async findAll(url: string,site:string): Promise<ResultData<T>> {
    return (await this.axiosinstance.get<ResultData<T>>(`/${url}`, { params: { site } })).data;
  }

  async findById(url: string,site:string, id: ID): Promise<ResultData<T>> {
    return (await this.axiosinstance.get<ResultData<T>>(`/${url}/${id}`, { params: { site } })).data;
  }

  async search(url: string,site:string, conditions: Partial<T>): Promise<Results<T>> {
    return (
      await this.axiosinstance.get<Results<T>>(`/${url}`, {
        params: { ...conditions, site },
      })
    ).data;
  }
}

export default Service;