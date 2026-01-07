import { Contenttype } from "src/models/viewmodel/contenttype/Contenttype";
import IService from "../IService";

export interface IContenttypeService extends IService<Contenttype> {}
export const IContenttypeService = Symbol('IContenttypeService');