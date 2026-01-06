import { Controller, Get, Inject, Param, Query, Render } from '@nestjs/common';
import { IContentService } from 'src/service/content/IContentService';

@Controller('news')
export class NewsController {
    constructor(
        @Inject(IContentService)
        private readonly contentService: IContentService,
    ) { }

    @Get()
    @Render('page/news-list-page')
    async getNewsList(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
        const newsList = await this.contentService.findAll('/news');
        return {
            title: 'Danh sách tin tức',
            currentPath: '/news',
            newsList,
            seo: {
                description: 'Danh sách các tin tức mới nhất',
                keywords: 'tin tức, news, blog',
                og: {
                    type: 'website',
                    title: 'Danh sách tin tức',
                    description: 'Danh sách các tin tức mới nhất',
                },
            },
        };
    }

    // @Get('detail/:id')
    // @Render('page/news-detail-page')
    // async getNewsDetail(@Param('id') id: string) {
    //     const news = await this.newsService.getNewsById(id);
    //     if (!news) {
    //         throw new Error('News not found');
    //     }
    //     return {
    //         title: news.title,
    //         currentPath: `/news/detail/${id}`,
    //         news,
    //         seo: {
    //             description: news.description,
    //             keywords: news.keywords,
    //             og: {
    //                 type: 'article',
    //                 title: news.title,
    //                 description: news.description,
    //                 image: news.image,
    //             },
    //             jsonLd: {
    //                 '@context': 'https://schema.org',
    //                 '@type': 'Article',
    //                 headline: news.title,
    //                 description: news.description,
    //                 image: news.image,
    //                 datePublished: news.publishDate,
    //                 author: {
    //                     '@type': 'Person',
    //                     name: news.author,
    //                 },
    //             },
    //         },
    //         breadcrumb: [
    //             { name: 'Home', url: '/' },
    //             { name: 'News', url: '/news' },
    //             { name: news.title, url: `/news/detail/${id}` },
    //         ],
    //     };
    // }

    // @Get('search')
    // @Render('page/news-search-page')
    // async searchNews(@Query('q') query: string, @Query('page') page: number = 1) {
    //     const searchResults = await this.newsService.searchNews(query, page);
    //     return {
    //         title: `Tìm kiếm: ${query}`,
    //         currentPath: '/news/search',
    //         searchResults,
    //         query,
    //         seo: {
    //             description: `Kết quả tìm kiếm cho "${query}"`,
    //             keywords: `tìm kiếm, ${query}`,
    //         },
    //     };
    // }
}