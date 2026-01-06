import IService from "../IService";
import { Feedback } from "src/models/viewmodel/feedback/Feedback";
export interface IFeedbackService extends IService<Feedback> {}
export const IFeedbackService = Symbol('IFeedbackService');