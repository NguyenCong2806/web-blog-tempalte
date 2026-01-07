import IService from "../IService";
import { Parallax } from "src/models/viewmodel/parallax/Parallax";
export interface IParallaxService extends IService<Parallax> {}
export const IParallaxService = Symbol('IParallaxService');