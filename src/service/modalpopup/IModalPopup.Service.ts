import { ModalPopup } from "src/models/viewmodel/modalpopup/ModalPopup";
import IService from "../IService";
export interface IModalPopupService extends IService<ModalPopup> {}
export const IModalPopupService = Symbol('IModalPopupService');