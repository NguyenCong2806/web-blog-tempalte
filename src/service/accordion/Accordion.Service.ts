import { Injectable, Inject } from '@nestjs/common';
import Service from '../Service';
import { IAccordionService } from './IAccordion.Service';
import { Accordion } from 'src/models/viewmodel/accordion/Accordion';
@Injectable()
export class AccordionService
    extends Service<Accordion>
    implements IAccordionService {
}
