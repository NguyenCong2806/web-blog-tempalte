import { SystemConfig } from "src/models/viewmodel/SystemConfig/systemconfigDto";
import IService from "../IService";
export interface ISystemConfigService extends IService<SystemConfig> {}
export const ISystemConfigService = Symbol('ISystemConfigService');