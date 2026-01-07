import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IPopularService } from './IPopular.Service';
import { Popular } from 'src/models/viewmodel/popular/Popular';

@Injectable()
export class PopularService
    extends Service<Popular>
    implements IPopularService {
}
