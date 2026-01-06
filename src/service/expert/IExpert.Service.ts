import { Expert } from "src/models/viewmodel/expert/Expert";
import IService from "../IService";
export interface IExpertService extends IService<Expert> {}
export const IExpertService = Symbol('IExpertService');