import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IMajorsnoteService } from './IMajorsnote.Service';
import { MajorsNote } from 'src/models/viewmodel/majorsnote/MajorsNote';

@Injectable()
export class MajorsnoteService
    extends Service<MajorsNote>
    implements IMajorsnoteService {
}
