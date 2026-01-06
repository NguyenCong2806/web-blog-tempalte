import IService from "../IService";
import { Logo } from "src/models/viewmodel/logo/Logo";
export interface ILogoService extends IService<Logo> {}
export const ILogoService = Symbol('ILogoService');