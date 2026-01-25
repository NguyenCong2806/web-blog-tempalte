import { Module } from '@nestjs/common';
import { MajorController } from 'src/controller/major/major.controller';
import { IPageContentService } from 'src/service/pagecontent/IPageContent.Service';
import { PageContentService } from 'src/service/pagecontent/PageContent.Service';


@Module({
 imports: [],
 controllers: [MajorController],
  providers: [
    {
      provide: IPageContentService, 
      useClass: PageContentService,
    },
  ],
  exports: [IPageContentService],
})
export class PageContentModule {}