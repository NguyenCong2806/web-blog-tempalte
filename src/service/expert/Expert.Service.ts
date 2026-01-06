import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IExpertService } from './IExpert.Service';
import { Expert } from 'src/models/viewmodel/expert/Expert';

@Injectable()
export class ExpertService
    extends Service<Expert>
    implements IExpertService {
}
