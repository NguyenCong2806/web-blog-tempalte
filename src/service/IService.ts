import SearchParams from "src/models/BaseModel/SearchParams";
import ResultData from "../models/BaseModel/ResultData";
import Results from "../models/BaseModel/Results";

interface IService<T, ID = string | number> {
    findAlls(url: string, site: string, data: SearchParams): Promise<Results<T>>;
    findAll(url: string, site: string): Promise<ResultData<T>>;
    findById(url: string, site: string, id: ID): Promise<ResultData<T>>;
    search(url: string, site: string, conditions: Partial<T>): Promise<Results<T>>;
}

export default IService;