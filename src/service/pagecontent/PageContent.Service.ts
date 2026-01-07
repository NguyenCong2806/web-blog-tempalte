import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IPageContentService } from './IPageContent.Service';
import { PageContent } from 'src/models/viewmodel/pagecontent/PageContent';

@Injectable()
export class PageContentService
    extends Service<PageContent>
    implements IPageContentService {
}
