import { Module } from '@nestjs/common';
import { MajorController } from 'src/controller/major/major.controller';
import { IModalPopupService } from 'src/service/modalpopup/IModalPopup.Service';
import { ModalPopupService } from 'src/service/modalpopup/ModalPopup.Service';
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
    {
      provide: IModalPopupService, 
      useClass: ModalPopupService,
    }
  ],
  exports: [IPageContentService],
})
export class PageContentModule {}