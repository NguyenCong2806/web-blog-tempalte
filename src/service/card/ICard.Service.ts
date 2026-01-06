import IService from "../IService";
import { Card } from "src/models/viewmodel/card/Card";
export interface ICardService extends IService<Card> {}
export const ICardService = Symbol('ICardService');