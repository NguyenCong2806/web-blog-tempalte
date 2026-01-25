import { Controller, Get, Inject, Render } from '@nestjs/common';
import { endpoint } from 'src/config/urlapi';
import { PageContent } from 'src/models/viewmodel/pagecontent/PageContent';
import { IPageContentService } from 'src/service/pagecontent/IPageContent.Service';

@Controller('gioi-thieu')
export class AboutController {
    constructor(
        @Inject(IPageContentService) private readonly pageContentService: IPageContentService,
    ) { }
    @Get()
    @Render('page/about-page')
    async getPage(): Promise<object> {
        const pageContents = await this.pageContentService.findAll(endpoint.pagecontent + '/gioi-thieu');
        const targetPage = pageContents.item.item as PageContent[];
        return {
            title: "gioi-thieu",
            currentPath: '/gioi-thieu',
            page: targetPage[0]
        };
    }
}
