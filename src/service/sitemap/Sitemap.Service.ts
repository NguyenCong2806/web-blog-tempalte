import { Inject, Injectable } from '@nestjs/common';
import { ISitemapServiceInterface } from './ISitemap.Service';
import { endpoint } from 'src/config/urlapi';
import { IMenuService } from '../menu/IMenu.Service';
import { IContentService } from '../content/IContentService';
import { Menu } from 'src/models/viewmodel/menu/Menu';

export const ISitemapService = Symbol('ISitemapService');

@Injectable()
export class SitemapService implements ISitemapServiceInterface {
  private sitemapCache: string | null = null;
  private cacheTime: number = 0;
  private readonly CACHE_DURATION: number; // millisecond

  constructor(
    @Inject(IContentService) private readonly contentService: IContentService,
    @Inject(IMenuService) private readonly menuService: IMenuService
) {
    // Đọc từ .env (giây) => chuyển sang millisecond
    const cacheDurationSeconds = parseInt(process.env.SITEMAP_CACHE_DURATION || '3600', 10);
    this.CACHE_DURATION = cacheDurationSeconds * 1000; // chuyển giây sang millisecond
    console.log(`Sitemap cache duration: ${cacheDurationSeconds} seconds (${this.CACHE_DURATION}ms)`);
  }

  async generateSitemap(): Promise<string> {
    // Kiểm tra cache
    const now = Date.now();
    if (this.sitemapCache && (now - this.cacheTime) < this.CACHE_DURATION) {
      console.log('Sitemap from cache');
      return this.sitemapCache;
    }

    const baseUrl = (process.env.BASE_URL || 'https://yourdomain.com').replace(/\/$/, '');
    
    // Định nghĩa các trang tĩnh
    const staticPages = [
    //   { url: '/', lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
    //   { url: '/gioi-thieu', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    //   { url: '/lien-he', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    //   { url: '/dang-ky', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    //   { url: '/nganh', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    //   { url: '/tin-tuc', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
    //   { url: '/khai-giang', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
    ];

    let dynamicPages: Array<{ url: string; lastmod: string; priority: string }> = [];
    try {
      // Lấy danh sách ngành (major)
      const menu = await this.menuService.findAll(endpoint.menu);

      if (menu.item && Array.isArray(menu.item)) {
        const menuPages = menu.item.map((item: Menu) => ({
          url: `${item.link}`,
          lastmod: new Date().toISOString().split('T')[0],
          priority: '0.7',
        }));
        dynamicPages.push(...menuPages);
      }
    } catch (error: any) {
      // Nếu API trả 401 Unauthorized, log warning và skip majors
      if (error.response?.status === 401) {
        console.warn('Sitemap: Cannot fetch majors (401 Unauthorized) - skipping major details');
      } else {
        console.error('Error fetching majors for sitemap:', error.message);
      }
    }
    try {
      // Lấy danh sách bài viết
      const contents = await this.contentService.findAlls(endpoint.content, {
        pageindex: 1,
        pagesize: 1000,
        keyword: '',
      });

      if (contents.items && Array.isArray(contents.items)) {
        const contentPages = contents.items.map((item: any) => ({
          url: `/tin-tuc/${item.slug || item.id}`,
          lastmod: item.updateDate || item.createDate || new Date().toISOString().split('T')[0],
          priority: '0.6',
        }));
        dynamicPages.push(...contentPages);
      }
    } catch (error) {
      console.error('Error fetching content for sitemap:', error);
    }

    

    // Kết hợp tất cả các trang
    const allPages = [...staticPages, ...dynamicPages];

    // Tạo XML sitemap
    let sitemapXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemapXml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const page of allPages) {
      sitemapXml += '  <url>\n';
      sitemapXml += `    <loc>${baseUrl}${page.url}</loc>\n`;
      sitemapXml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemapXml += `    <priority>${page.priority}</priority>\n`;
      sitemapXml += '  </url>\n';
    }

    sitemapXml += '</urlset>';

    // Lưu cache
    this.sitemapCache = sitemapXml;
    this.cacheTime = now;

    return sitemapXml;
  }

  // Hàm để xóa cache khi có bài viết/ngành mới
  invalidateCache(): void {
    this.sitemapCache = null;
    this.cacheTime = 0;
    console.log('Sitemap cache invalidated');
  }
}

