import { Module } from '@nestjs/common';
import { NewsController } from '../../controller/news/news.controller';
import { ContentService } from 'src/service/content/content.service';
import { IContentService } from 'src/service/content/IContentService';

@Module({
    controllers: [NewsController],
    providers: [
        {
            provide: IContentService, 
            useClass: ContentService,
        },
    ],
    exports: [IContentService],
})
export class NewsModule { }