import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { About } from 'src/models/viewmodel/about/About';
import { IAboutService } from './IAbout.Service';
@Injectable()
export class AboutService
    extends Service<About>
    implements IAboutService {
}
