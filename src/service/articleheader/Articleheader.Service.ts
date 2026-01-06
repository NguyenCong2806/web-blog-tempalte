import { Injectable } from '@nestjs/common';
import Service from '../Service';
import { IArticleheaderService } from './IArticleheader.Service';
import { ArticleHeader } from 'src/models/viewmodel/articleheader/ArticleHeader';
@Injectable()
export class ArticleheaderService
    extends Service<ArticleHeader>
    implements IArticleheaderService {
}
