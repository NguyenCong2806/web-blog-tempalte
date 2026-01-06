import { Advertisement } from "src/models/viewmodel/advertisement/Advertisement";
import IService from "../IService";


export interface IAdvertisementService extends IService<Advertisement> {}
export const IAdvertisementService = Symbol('IAdvertisementService');