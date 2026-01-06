import IService from "../IService";
import { Courses } from "src/models/viewmodel/courses/Courses";


export interface ICoursesService extends IService<Courses> {}
export const ICoursesService = Symbol('ICoursesService');