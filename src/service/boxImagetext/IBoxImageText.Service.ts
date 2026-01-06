import { BoxImageText } from "src/models/viewmodel/boxImagetext/BoxImageText";
import IService from "../IService";
export interface IBoxImageTextService extends IService<BoxImageText> {}
export const IBoxImageTextService = Symbol('IBoxImageTextService');