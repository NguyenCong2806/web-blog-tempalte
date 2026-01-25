import { Controller, Get, Inject, Param, Query, Render } from '@nestjs/common';
import { endpoint } from 'src/config/urlapi';
import { Content } from 'src/models/viewmodel/content/Content';
import { IContentService } from 'src/service/content/IContentService';

@Controller('tin-tuc')
export class ContentController {
    constructor(
        @Inject(IContentService) private readonly contentService: IContentService,
    ) { }


    @Get()
    @Render('page/news-list-page')
    async getPage(@Query() query: any): Promise<object> {
        const pageIndex = query.pageindex ? Number(query.pageindex) : 1;
        const pageSize = query.pagesize ? Number(query.pagesize) : 3;
        const keyword = query.keyword || '';
        const contents = await this.contentService.findAlls(endpoint.content, {
            pageindex: pageIndex, // Sửa pageindex -> pageIndex
            pagesize: pageSize,   // Sửa pagesize -> pageSize
            keyword: keyword,
        });

        const paginationData = {
            currentPage: contents.pageIndex, // Key từ API trả về (thường là CamelCase)
            totalPages: contents.totalPage,
            totalItems: contents.totalCount,
            pageSize: pageSize,
            keyword: keyword
        };

        return {
            title: "Tin tức",
            currentPath: '/tin-tuc',
            newsItems: contents.items,
            pagination: paginationData,
            query: { pageindex: pageIndex, pagesize: pageSize, keyword } // Trả lại chữ thường cho URL đẹp
        };
    }
    @Get(':slug')
    @Render('page/news-detail-page')
    async getPost(@Param('slug') slug: string) {
        const content = await this.contentService.findAll(endpoint.contentgetBySlug + '/' + slug);
        return {
            title: slug, // Để hiển thị trên tab trình duyệt
            newsItem: content.item.item[0], // View news-detail.ejs đang chờ biến 'newsItem'
            currentPath: '/tin-tuc' // Để highlight menu (nếu có)
        };
    }
}
