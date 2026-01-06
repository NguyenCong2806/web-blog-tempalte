import { CardNumbers } from "src/models/viewmodel/cardnumbers/CardNumbers";
import IService from "../IService";
export interface ICardNumbersService extends IService<CardNumbers> {}
export const ICardNumbersService = Symbol('ICardNumbersService');