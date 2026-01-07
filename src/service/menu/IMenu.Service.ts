import IService from "../IService";
import { Menu } from "src/models/viewmodel/menu/Menu";
export interface IMenuService extends IService<Menu> {}
export const IMenuService = Symbol('IMenuService');