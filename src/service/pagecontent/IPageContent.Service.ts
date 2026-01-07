import { PageContent } from "src/models/viewmodel/pagecontent/PageContent";
import IService from "../IService";
export interface IPageContentService extends IService<PageContent> {}
export const IPageContentService = Symbol('IPageContentService');