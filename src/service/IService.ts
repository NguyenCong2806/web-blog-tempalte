import SearchParams from "src/models/BaseModel/SearchParams";
import ResultData from "../models/BaseModel/ResultData";
import Results from "../models/BaseModel/Results";

interface IService<T, ID = string | number> {
    findAlls(url: string, data: SearchParams): Promise<Results<T>>;
    findAll(url: string): Promise<ResultData<T>>;
    findById(url: string, id: ID): Promise<ResultData<T>>;
    search(url: string, conditions: Partial<T>): Promise<Results<T>>;
}

export default IService;