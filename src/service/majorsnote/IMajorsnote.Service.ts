import IService from "../IService";
import { MajorsNote } from "src/models/viewmodel/majorsnote/MajorsNote";
export interface IMajorsnoteService extends IService<MajorsNote> {}
export const IMajorsnoteService = Symbol('IMajorsnoteService');