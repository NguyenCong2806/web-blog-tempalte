import IService from "../IService";
import { ArticleHeader } from "src/models/viewmodel/articleheader/ArticleHeader";


export interface IArticleheaderService extends IService<ArticleHeader> {}
export const IArticleheaderService = Symbol('IArticleheaderService');