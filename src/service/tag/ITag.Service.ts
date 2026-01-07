import { Tag } from "src/models/viewmodel/tag/Tag";
import IService from "../IService";
export interface ITagService extends IService<Tag> {}
export const ITagService = Symbol('ITagService');