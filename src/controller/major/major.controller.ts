import { Controller, Get, Inject, Param, Render } from '@nestjs/common';
import { endpoint } from 'src/config/urlapi';
import { ModalPopup } from 'src/models/viewmodel/modalpopup/ModalPopup';
import { IModalPopupService } from 'src/service/modalpopup/IModalPopup.Service';
import { IPageContentService } from 'src/service/pagecontent/IPageContent.Service';

@Controller('nganh')
export class MajorController {
    constructor(
        @Inject(IPageContentService) private readonly pageContentService: IPageContentService,
        @Inject(IModalPopupService) private readonly modalPopupService : IModalPopupService,
    ) { }
    @Get(':slug')
    @Render('page/major-detail')
    async getPost(@Param('slug') slug: string) {
        const content = await this.pageContentService.findAll(endpoint.pagecontent + '/' + slug);
        const modalPopups = await this.modalPopupService.findAll(endpoint.modalpopup);
        const modalPopupData = modalPopups.item[0] as ModalPopup;
        return {
            title: slug, // Để hiển thị trên tab trình duyệt
            pageContent: content.item.item[0], // View news-detail.ejs đang chờ biến 'newsItem'
            currentPath: '/nganh',
            formhtml: modalPopupData.note || '',
        };
    }

}
