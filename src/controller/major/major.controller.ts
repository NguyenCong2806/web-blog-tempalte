import { Controller, Get, Inject, Param, Render } from '@nestjs/common';
import { endpoint } from 'src/config/urlapi';
import { IPageContentService } from 'src/service/pagecontent/IPageContent.Service';

@Controller('nganh')
export class MajorController {
    constructor(
        @Inject(IPageContentService) private readonly pageContentService: IPageContentService,
    ) { }
    @Get(':slug')
    @Render('page/major-detail')
    async getPost(@Param('slug') slug: string) {
        const content = await this.pageContentService.findAll(endpoint.pagecontent + '/' + slug);
        return {
            title: slug, // Để hiển thị trên tab trình duyệt
            pageContent: content.item.item[0], // View news-detail.ejs đang chờ biến 'newsItem'
            currentPath: '/nganh',
        };
    }

}
