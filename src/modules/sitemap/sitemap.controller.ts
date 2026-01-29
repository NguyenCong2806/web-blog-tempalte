import { Controller, Get, Inject, Header, Response } from '@nestjs/common';
import type { Response as ExpressResponse } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { SitemapService, ISitemapService } from 'src/service/sitemap/Sitemap.Service';

@Controller()
export class SitemapController {
  constructor(
    @Inject(ISitemapService) private readonly sitemapService: SitemapService,
  ) { }

  @Get('sitemap.xml')
  @Header('Content-Type', 'application/xml')
  async getSitemap(@Response() res: ExpressResponse): Promise<void> {
    try {
      const sitemapXml = await this.sitemapService.generateSitemap();
      res.send(sitemapXml);
    } catch (error) {
      console.error('Error generating sitemap:', error);
      res.status(500).send('Error generating sitemap');
    }
  }

  @Get('robots.txt')
  @Header('Content-Type', 'text/plain')
  async getRobots(@Response() res: ExpressResponse): Promise<void> {
    try {
      const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
      
      // Đọc file robots.txt từ public folder
      if (fs.existsSync(robotsPath)) {
        let robotsContent = fs.readFileSync(robotsPath, 'utf-8');
        
        // Thay thế yourdomain.com với BASE_URL từ .env
        const baseUrl = (process.env.BASE_URL || 'https://yourdomain.com').replace(/\/$/, '');
        robotsContent = robotsContent.replace('https://yourdomain.com', baseUrl);
        
        res.send(robotsContent);
      } else {
        // Nếu không có file, trả về default robots.txt
        const defaultRobots = `User-agent: *
Allow: /

Sitemap: ${(process.env.BASE_URL || 'https://yourdomain.com').replace(/\/$/, '')}/sitemap.xml`;
        res.send(defaultRobots);
      }
    } catch (error) {
      console.error('Error generating robots.txt:', error);
      res.status(500).send('Error generating robots.txt');
    }
  }
}

