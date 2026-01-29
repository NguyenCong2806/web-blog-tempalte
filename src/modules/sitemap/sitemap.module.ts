import { Module } from '@nestjs/common';
import { SitemapController } from './sitemap.controller';
import { SitemapService, ISitemapService } from 'src/service/sitemap/Sitemap.Service';
import { ContentModule } from '../content/content.module';
import { MenuModule } from '../menu/menu.module';

@Module({
  imports: [ContentModule, MenuModule],
  controllers: [SitemapController],
  providers: [
    {
      provide: ISitemapService,
      useClass: SitemapService,
    },
  ],
  exports: [ISitemapService],
})
export class SitemapModule { }
