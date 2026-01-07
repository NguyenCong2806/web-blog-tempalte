import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IContenttypeService } from './IContenttype.Service';
import { Contenttype } from 'src/models/viewmodel/contenttype/Contenttype';
@Injectable()
export class ContenttypeService
    extends Service<Contenttype>
    implements IContenttypeService {
}
