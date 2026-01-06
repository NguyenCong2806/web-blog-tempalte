import { Advertisement } from "src/models/viewmodel/advertisement/Advertisement";
import IService from "../IService";
import { Accordion } from "src/models/viewmodel/accordion/Accordion";


export interface IAccordionService extends IService<Accordion> {}
export const IAccordionService = Symbol('IAccordionService');