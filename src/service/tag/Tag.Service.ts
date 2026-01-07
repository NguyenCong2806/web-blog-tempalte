import { Injectable } from '@nestjs/common';
import Service from '../Service';
import {ITagService } from './ITag.Service';
import { Tag } from 'src/models/viewmodel/tag/Tag';

@Injectable()
export class TagService
    extends Service<Tag>
    implements ITagService {
}
