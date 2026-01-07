import IService from "../IService";
import { Tabs } from "src/models/viewmodel/tabs/Tabs";
export interface ITabsService extends IService<Tabs> {}
export const ITabsService = Symbol('ITabsService');