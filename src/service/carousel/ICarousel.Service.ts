
import { Carousel } from "src/models/viewmodel/carousel/Carousel";
import IService from "../IService";

export interface ICarouselService extends IService<Carousel> {}
export const ICarouselService = Symbol('ICarouselService');