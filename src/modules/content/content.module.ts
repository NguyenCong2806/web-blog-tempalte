import { Module } from '@nestjs/common';
import { ContentController } from 'src/controller/content/content.controller';
import { ContentService } from 'src/service/content/content.service';
import { IContentService } from 'src/service/content/IContentService';

@Module({
    imports: [],
    controllers: [ContentController],
    providers: [
        {
            provide: IContentService,
            useClass: ContentService,
        },
    ],
    exports: [IContentService],
})
export class ContentModule { }
