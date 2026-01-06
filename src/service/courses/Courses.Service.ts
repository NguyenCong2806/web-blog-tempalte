import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { ICoursesService } from './ICourses.Service';
import { Courses } from 'src/models/viewmodel/courses/Courses';
@Injectable()
export class CoursesService
    extends Service<Courses>
    implements ICoursesService {
}
