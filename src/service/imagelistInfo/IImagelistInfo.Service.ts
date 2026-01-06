import { ImageListInfo } from "src/models/viewmodel/imagelistInfo/ImageListInfo";
import IService from "../IService";
export interface IImageListInfoService extends IService<ImageListInfo> {}
export const IImageListInfoService = Symbol('IImageListInfoService');