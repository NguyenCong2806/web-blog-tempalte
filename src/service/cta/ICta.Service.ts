import { Cta } from "src/models/viewmodel/cta/Cta";
import IService from "../IService";
export interface ICtaService extends IService<Cta> {}
export const ICtaService = Symbol('ICtaService');