import IService from "../IService";
import { Contact } from "src/models/viewmodel/contact/Contact";
export interface IContactService extends IService<Contact> {}
export const IContactService = Symbol('IContactService');