import IService from "../IService";
import { About } from "src/models/viewmodel/about/About";
export interface IAboutService extends IService<About> {}
export const IAboutService = Symbol('IAboutService');