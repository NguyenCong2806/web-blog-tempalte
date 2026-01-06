import { Content } from "src/models/viewmodel/content/Content";
import IService from "../IService";

export interface IContentService extends IService<Content> {}
export const IContentService = Symbol('IContentService');
