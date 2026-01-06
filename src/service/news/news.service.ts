import { Injectable } from '@nestjs/common';
import { NewsItem } from '../../viewmodels';

@Injectable()
export class NewsService {
  // Mock data - thay thế bằng database thực tế
  private news: NewsItem[] = [
    {
      id: '1',
      title: 'Tin tức 1',
      description: 'Mô tả tin tức 1',
      content: 'Nội dung chi tiết tin tức 1',
      image: '/image/news1.jpg',
      author: 'Tác giả 1',
      publishDate: '2023-01-01',
      keywords: 'tin tức, news',
    },
    {
      id: '2',
      title: 'Tin tức 2',
      description: 'Mô tả tin tức 2',
      content: 'Nội dung chi tiết tin tức 2',
      image: '/image/news2.jpg',
      author: 'Tác giả 2',
      publishDate: '2023-01-02',
      keywords: 'tin tức, blog',
    },
    // Thêm dữ liệu mock khác nếu cần
  ];

  async getNewsList(page: number = 1, limit: number = 10): Promise<{ news: NewsItem[]; total: number; page: number; limit: number }> {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
      news: this.news.slice(start, end),
      total: this.news.length,
      page,
      limit,
    };
  }

  async getNewsById(id: string): Promise<NewsItem | undefined> {
    return this.news.find(news => news.id === id);
  }

  async searchNews(query: string, page: number = 1): Promise<{ news: NewsItem[]; total: number; query: string; page: number }> {
    const filteredNews = this.news.filter(news =>
      news.title.toLowerCase().includes(query.toLowerCase()) ||
      news.description.toLowerCase().includes(query.toLowerCase())
    );
    const start = (page - 1) * 10;
    const end = start + 10;
    return {
      news: filteredNews.slice(start, end),
      total: filteredNews.length,
      query,
      page,
    };
  }
}