import { Module } from '@nestjs/common';
import { AboutController } from 'src/controller/about/about.controller';
import { AboutService } from 'src/service/about/About.service';
import { IPageContentService } from 'src/service/pagecontent/IPageContent.Service';
import { PageContentService } from 'src/service/pagecontent/PageContent.Service';

@Module({
    imports: [],
    controllers: [AboutController],
    providers: [
        AboutService,
        {
            provide: IPageContentService,
            useClass: PageContentService,
        },
    ],
    exports: [AboutService],
})
export class AboutModule { }
