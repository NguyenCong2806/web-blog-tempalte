import { Popular } from "src/models/viewmodel/popular/Popular";
import IService from "../IService";
export interface IPopularService extends IService<Popular> {}
export const IPopularService = Symbol('IPopularService');