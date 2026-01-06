import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { Cta } from 'src/models/viewmodel/cta/Cta';
import { ICtaService } from './ICta.Service';

@Injectable()
export class CtaService
    extends Service<Cta>
    implements ICtaService {
}
